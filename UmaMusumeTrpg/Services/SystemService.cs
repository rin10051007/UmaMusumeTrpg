using Microsoft.IdentityModel.Tokens;
using UmaMusumeTrpg.Entitys;
using UmaMusumeTrpg.Enum;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.System.Delete;
using UmaMusumeTrpg.Models.System.Detail;
using UmaMusumeTrpg.Models.System.Entry;
using UmaMusumeTrpg.Models.System.List;

namespace UmaMusumeTrpg.Services
{
    public class SystemService : ISystemService
    {
        private readonly UmaMusumeTrpgDbContext _dbContext;
        private readonly IGuidService _guidService;
        private readonly ITimeService _timeService;
        public SystemService(
            UmaMusumeTrpgDbContext dbContext,
            IGuidService guidService,
            ITimeService timeService)
        {
            _dbContext = dbContext;
            _guidService = guidService;
            _timeService = timeService;
        }

        public List<ListItem> GetList(ListSearch search)
        {

            IOrderedQueryable<User> list = null;
            list = (IOrderedQueryable<User>)_dbContext.Users.Where(x => !x.IsDeleted);

            if (!string.IsNullOrWhiteSpace(search.Name))
                list = (IOrderedQueryable<User>)list.Where(x => x.Name.Contains(search.Name));

            if (search.SysPermission != SysPermission.None)
                list = (IOrderedQueryable<User>)list.Where(x => x.SysPermission == search.SysPermission);

            if (search.UmaMusumeTrpgPermission != UmaMusumeTrpgPermission.None)
                list = (IOrderedQueryable<User>)list.Where(x => x.UmaMusumeTrpgPermission == search.UmaMusumeTrpgPermission);

            switch (search.SortItem)
            {
                case SystemSortItem.None:
                case SystemSortItem.Id:
                    list = list.OrderBy(x => x.ID); break;
                case SystemSortItem.Name:
                    list = list.OrderBy(x => x.Name); break;
                case SystemSortItem.SysPermissions:
                    list = list.OrderBy(x => x.SysPermission); break;
                case SystemSortItem.UmaMusumeTrpgPermissions:
                    list = list.OrderBy(x => x.UmaMusumeTrpgPermission); break;
            }

            list = list.ThenBy(x => x.ID);

            list = (IOrderedQueryable<User>)(search.SortDirection != SotrDirection.DescendingOrder ?
                list : list.Reverse());

            var maxPage = Convert.ToInt32(Math.Ceiling((decimal)list.Count() / search.DisplayCount));
            if (maxPage > 1)
            {
                if (maxPage > search.DisplayPage)
                    list = (IOrderedQueryable<User>)list.Skip((search.DisplayPage - 1) * search.DisplayCount);
                else
                    list = (IOrderedQueryable<User>)list.Skip((maxPage - 1) * search.DisplayCount);
            }
            list = (IOrderedQueryable<User>)list.Take(search.DisplayCount);

            return list.Select(x => new ListItem(x)).ToList();
        }

        public (int, string) Entry(EntryItem item)
        {
            var user = new User()
            {
                Name = item.Name,
                SysPermission = item.SysPermission,
                UmaMusumeTrpgPermission = item.UmaMusumeTrpgPermission,
                Email = item.Email,
                Password = item.Password,
                Token = _guidService.NewGuid(),
                CreateTime = _timeService.NowTime(),
                UpdateTime = _timeService.NowTime(),
            };
            user.Password = PasswordHash(user);
            _dbContext.Add(user);
            _dbContext.SaveChanges();
            return (user.ID, user.Token);
        }

        public DetailItem Detil(DetailSearch serch)
        {
            return new DetailItem(_dbContext.Users
                .FirstOrDefault(x => (x.ID == serch.Id && serch.Token.IsNullOrEmpty()) ||
                (x.ID == serch.Id && !serch.Token.IsNullOrEmpty() && serch.Token.Equals(x.Token))));
        }

        public (int, DateTime?) Delete(DeleteItem item)
        {
            var user = _dbContext.Users
                .FirstOrDefault(x => x.ID == item.Id && x.Token.Equals(item.Token));
            user.DeleteTime = _timeService.NowTime();
            user.IsDeleted = true;
            _dbContext.SaveChanges();
            return (user.ID, user.DeleteTime);
        }

        public string PasswordHash(User user)
        {
            return user.HashPassword(user, user.Password);
        }
    }
}
