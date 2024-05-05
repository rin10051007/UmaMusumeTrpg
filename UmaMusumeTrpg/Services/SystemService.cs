using Microsoft.IdentityModel.Tokens;
using UmaMusumeTrpg.Entitys;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.System.Delete;
using UmaMusumeTrpg.Models.System.Detail;
using UmaMusumeTrpg.Models.System.Edit;
using UmaMusumeTrpg.Models.System.Entry;
using UmaMusumeTrpg.Models.System.IsLoginIdDuplicate;
using UmaMusumeTrpg.Models.System.List;

namespace UmaMusumeTrpg.Services;

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

    public (List<ListItem>, int) GetList(ListSearch search)
    {
        IOrderedQueryable<User> list = null;
        list = (IOrderedQueryable<User>)_dbContext.Users.Where(x => !x.IsDeleted);

        if (!string.IsNullOrWhiteSpace(search.Integration))
            list = (IOrderedQueryable<User>)list.Where(x =>
                x.LoginId.Contains(search.Integration) || x.Name.Contains(search.Integration) ||
                x.Email.Contains(search.Integration));

        if (!string.IsNullOrWhiteSpace(search.LoginId))
            list = (IOrderedQueryable<User>)list.Where(x => x.LoginId.Contains(search.LoginId));

        if (!string.IsNullOrWhiteSpace(search.Name))
            list = (IOrderedQueryable<User>)list.Where(x => x.Name.Contains(search.Name));

        if (!string.IsNullOrWhiteSpace(search.Email))
            list = (IOrderedQueryable<User>)list.Where(x => x.Email.Contains(search.Email));

        if (search.SysPermission != SysPermission.None)
            list = (IOrderedQueryable<User>)list.Where(x => x.SysPermission == search.SysPermission);

        if (search.UmaMusumeTrpgPermission != UmaMusumeTrpgPermission.None)
            list = (IOrderedQueryable<User>)list.Where(x =>
                x.UmaMusumeTrpgPermission == search.UmaMusumeTrpgPermission);

        if (search.CreateTimeStart.HasValue)
            list = (IOrderedQueryable<User>)list.Where(x =>
                DateTime.Compare(x.CreateTime.Date, search.CreateTimeStart.Value) >= 0);

        if (search.CreateTimeEnd.HasValue)
            list = (IOrderedQueryable<User>)list.Where(x => x.CreateTime.Date <= search.CreateTimeEnd.Value);

        if (search.UpdateTimeStart.HasValue)
            list = (IOrderedQueryable<User>)list.Where(x => x.UpdateTime.Date >= search.UpdateTimeStart);

        if (search.UpdateTimeEnd.HasValue)
            list = (IOrderedQueryable<User>)list.Where(x => x.UpdateTime.Date <= search.UpdateTimeEnd);

        if (search.IsDelete)
        {
            if (search.DeletedTimeStart.HasValue)
                list = (IOrderedQueryable<User>)list.Where(x =>
                    x.DeleteTime.HasValue && x.DeleteTime.Value.Date >= search.DeletedTimeStart);

            if (search.DeletedTimeEnd.HasValue)
                list = (IOrderedQueryable<User>)list.Where(x =>
                    x.DeleteTime.HasValue && x.DeleteTime.Value.Date <= search.DeletedTimeEnd);
        }

        if (!search.IsUndeleted)
            list = (IOrderedQueryable<User>)list.Where(x => x.IsDeleted == true);
        if (!search.IsDelete)
            list = (IOrderedQueryable<User>)list.Where(x => x.IsDeleted == false);

        if (search.SortDirection == SotrDirection.AscendingOrder)
            switch (search.SortItem)
            {
                default:
                case SystemSortItem.None:
                case SystemSortItem.Id:
                    list = list.OrderBy(x => x.ID);
                    break;
                case SystemSortItem.LoginId:
                    list = list.OrderBy(x => x.LoginId);
                    break;
                case SystemSortItem.Name:
                    list = list.OrderBy(x => x.Name);
                    break;
                case SystemSortItem.SysPermission:
                    list = list.OrderBy(x => x.SysPermission);
                    break;
                case SystemSortItem.UmaMusumeTrpgPermission:
                    list = list.OrderBy(x => x.UmaMusumeTrpgPermission);
                    break;
                case SystemSortItem.Email:
                    list = list.OrderBy(x => x.Email);
                    break;
                case SystemSortItem.CreateTime:
                    list = list.OrderBy(x => x.CreateTime);
                    break;
                case SystemSortItem.UpdateTime:
                    list = list.OrderBy(x => x.UpdateTime);
                    break;
                case SystemSortItem.DeleteTime:
                    list = list.OrderBy(x => x.DeleteTime);
                    break;
            }
        else if (search.SortDirection == SotrDirection.DescendingOrder)
            switch (search.SortItem)
            {
                default:
                case SystemSortItem.None:
                    list = list.OrderBy(x => x.ID);
                    break;
                case SystemSortItem.Id:
                    list = list.OrderByDescending(x => x.ID);
                    break;
                case SystemSortItem.Name:
                    list = list.OrderByDescending(x => x.Name);
                    break;
                case SystemSortItem.SysPermission:
                    list = list.OrderByDescending(x => x.SysPermission);
                    break;
                case SystemSortItem.UmaMusumeTrpgPermission:
                    list = list.OrderByDescending(x => x.UmaMusumeTrpgPermission);
                    break;
                case SystemSortItem.Email:
                    list = list.OrderByDescending(x => x.Email);
                    break;
                case SystemSortItem.CreateTime:
                    list = list.OrderByDescending(x => x.CreateTime);
                    break;
                case SystemSortItem.UpdateTime:
                    list = list.OrderByDescending(x => x.UpdateTime);
                    break;
                case SystemSortItem.DeleteTime:
                    list = list.OrderByDescending(x => x.DeleteTime);
                    break;
            }
        else
            list = list.OrderBy(x => x.ID);

        list = list.ThenBy(x => x.ID);
        var length = list.Count();

        var maxPage = Convert.ToInt32(Math.Ceiling((decimal)list.Count() / search.PageSize));
        if (maxPage > 0)
            list = maxPage > search.PageIndex
                ? (IOrderedQueryable<User>)list.Skip(search.PageIndex * search.PageSize)
                : (IOrderedQueryable<User>)list.Skip((maxPage - 1) * search.PageSize);
        list = (IOrderedQueryable<User>)list.Take(search.PageSize);

        return (list.Select(x => new ListItem(x)).ToList(), length);
    }

    public (int, string) Entry(EntryItem item)
    {
        User user = new()
        {
            LoginId = item.LoginId,
            Name = item.Name,
            SysPermission = item.SysPermission,
            UmaMusumeTrpgPermission = item.UmaMusumeTrpgPermission,
            Email = item.Email,
            Password = item.Password,
            Token = _guidService.NewGuid(),
            CreateTime = _timeService.NowTime(),
            UpdateTime = _timeService.NowTime()
        };
        user.PasswordHash();
        _ = _dbContext.Add(user);
        _ = _dbContext.SaveChanges();
        return (user.ID, user.Token);
    }

    public DetailItem Detail(DetailSelect select)
    {
        return new DetailItem(_dbContext.Users
            .FirstOrDefault(x => x.ID == select.Id && (select.Token.IsNullOrEmpty() ||
                                                       (!select.Token.IsNullOrEmpty() &&
                                                        select.Token.Equals(x.Token)))));
    }

    public (int, string, string) Edit(EditItem item)
    {
        var user = _dbContext.Users.FirstOrDefault(x => x.ID == item.Id && x.Token.Equals(item.Token));
        if (user == null) return (0, "", "");
        user.LoginId = item.LoginId;
        user.Name = item.Name;
        user.SysPermission = item.SysPermission;
        user.UmaMusumeTrpgPermission = item.UmaMusumeTrpgPermission;
        user.Email = item.Email;
        user.Token = _guidService.NewGuid();
        user.UpdateTime = _timeService.NowTime();
        if (!item.Password.IsNullOrEmpty()) user.PasswordHash(item.Password);
        _ = _dbContext.SaveChanges();
        return (user.ID, user.Name, user.Token);
    }

    public (int, DateTime?) Delete(DeleteItem item)
    {
        var user = _dbContext.Users
            .FirstOrDefault(x => x.ID == item.Id && x.Token.Equals(item.Token));
        if (user == null) return (0, _timeService.NowTime());
        user.DeleteTime = _timeService.NowTime();
        user.IsDeleted = true;
        user.Token = _guidService.NewGuid();
        _ = _dbContext.SaveChanges();
        return (user.ID, user.DeleteTime);
    }

    public bool IsLoginIdDuplicate(IsLoginIdDuplicateItem item)
    {
        return _dbContext.Users.Any(x => x.LoginId.Equals(item.LoginId) && !x.ID.Equals(item.Id) && !x.IsDeleted);
    }
}