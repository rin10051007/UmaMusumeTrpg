using UmaMusumeTrpg.Entitys;
using UmaMusumeTrpg.Enum;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.System.List;

namespace UmaMusumeTrpg.Services
{
    public class SystemService : ISystemService
    {
        private readonly UmaMusumeTrpgDbContext _dbContext;
        public SystemService(UmaMusumeTrpgDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Item> GetList(Search search)
        {

            IOrderedQueryable<User> list = null;
            list = (IOrderedQueryable<User>)_dbContext.Users.Where(x => !x.IsDelete);

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
            if (maxPage > search.DisplayPage)
                list = (IOrderedQueryable<User>)list.Skip((search.DisplayPage - 1) * search.DisplayCount);
            else
                list = (IOrderedQueryable<User>)list.Skip((maxPage - 1) * search.DisplayCount);

            list = (IOrderedQueryable<User>)list.Take(search.DisplayCount);

            return list
                .Where(x => x.SysPermission == search.SysPermission)
                .Select(x => new Item(x)).ToList();
        }
    }
}
