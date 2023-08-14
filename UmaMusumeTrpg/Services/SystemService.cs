using Microsoft.IdentityModel.Tokens;
using UmaMusumeTrpg.Entitys;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.System.Delete;
using UmaMusumeTrpg.Models.System.Detail;
using UmaMusumeTrpg.Models.System.Edit;
using UmaMusumeTrpg.Models.System.Entry;
using UmaMusumeTrpg.Models.System.List;
using UmaMusumeTrpg.Models.System.LoginIdConf;

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

    public List<ListItem> GetList(ListSearch search)
    {
        IOrderedQueryable<User> list = null;
        list = (IOrderedQueryable<User>)_dbContext.Users.Where(x => !x.IsDeleted);

        if (!string.IsNullOrWhiteSpace(search.Name))
            list = (IOrderedQueryable<User>)list.Where(x => x.Name.Contains(search.Name));

        if (search.SysPermission != SysPermission.None)
            list = (IOrderedQueryable<User>)list.Where(x => x.SysPermission == search.SysPermission);

        if (search.UmaMusumeTrpgPermission != UmaMusumeTrpgPermission.None)
            list = (IOrderedQueryable<User>)list.Where(x =>
                x.UmaMusumeTrpgPermission == search.UmaMusumeTrpgPermission);

        switch (search.SortItem)
        {
            default:
            case SystemSortItem.None:
            case SystemSortItem.Id:
                list = list.OrderBy(x => x.ID);
                break;
            case SystemSortItem.Name:
                list = list.OrderBy(x => x.Name);
                break;
            case SystemSortItem.SysPermissions:
                list = list.OrderBy(x => x.SysPermission);
                break;
            case SystemSortItem.UmaMusumeTrpgPermissions:
                list = list.OrderBy(x => x.UmaMusumeTrpgPermission);
                break;
        }

        list = list.ThenBy(x => x.ID);

        list = (IOrderedQueryable<User>)(search.SortDirection != SotrDirection.DescendingOrder ? list : list.Reverse());

        var maxPage = Convert.ToInt32(Math.Ceiling((decimal)list.Count() / search.DisplayCount));
        if (maxPage > 1)
            list = maxPage > search.DisplayPage
                ? (IOrderedQueryable<User>)list.Skip((search.DisplayPage - 1) * search.DisplayCount)
                : (IOrderedQueryable<User>)list.Skip((maxPage - 1) * search.DisplayCount);
        list = (IOrderedQueryable<User>)list.Take(search.DisplayCount);

        return list.Select(x => new ListItem(x)).ToList();
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

    public DetailItem Detil(DetailSearch serch)
    {
        return new DetailItem(_dbContext.Users
            .FirstOrDefault(x => (x.ID == serch.Id && serch.Token.IsNullOrEmpty()) ||
                                 (x.ID == serch.Id && !serch.Token.IsNullOrEmpty() && serch.Token.Equals(x.Token))));
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

    public bool IsLoginIdDuplicate(LoginIdConfItem item)
    {
        return !_dbContext.Users.Any(x => x.LoginId.Equals(item.LoginId) && !x.ID.Equals(item.Id) && !x.IsDeleted);
    }
}