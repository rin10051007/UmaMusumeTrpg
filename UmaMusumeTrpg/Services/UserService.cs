﻿using Microsoft.EntityFrameworkCore;
using UmaMusumeTrpg.Entities;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.User.Delete;
using UmaMusumeTrpg.Models.User.Detail;
using UmaMusumeTrpg.Models.User.Edit;
using UmaMusumeTrpg.Models.User.Entry;
using UmaMusumeTrpg.Models.User.IsLoginIdDuplicate;
using UmaMusumeTrpg.Models.User.List;
using UmaMusumeTrpg.Models.User.NameList;

namespace UmaMusumeTrpg.Services;

public class UserService(UmaMusumeTrpgDbContext dbContext, IGuidService guidService, ITimeService timeService)
    : IUserService
{
    public (List<ListItem>, int) GetList(ListSearch search)
    {
        var list = (IOrderedQueryable<User>)dbContext.Users.Where(x => true);

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

        if (search.CreatingTimeBeginning.HasValue)
            list = (IOrderedQueryable<User>)list.Where(x => x.CreatingTime.Date >= search.CreatingTimeBeginning.Value);

        if (search.CreatingTimeEnd.HasValue)
            list = (IOrderedQueryable<User>)list.Where(x => x.CreatingTime.Date <= search.CreatingTimeEnd.Value);

        if (search.UpdatingTimeBeginning.HasValue)
            list = (IOrderedQueryable<User>)list.Where(x => x.UpdatingTime.Date >= search.UpdatingTimeBeginning);

        if (search.UpdatingTimeEnd.HasValue)
            list = (IOrderedQueryable<User>)list.Where(x => x.UpdatingTime.Date <= search.UpdatingTimeEnd);

        if (search.IsDeleted)
        {
            if (search.DeletingTimeBeginning.HasValue)
                list = (IOrderedQueryable<User>)list.Where(x =>
                    x.DeletingTime!.Value.Date >= search.DeletingTimeBeginning);

            if (search.DeletingTimeEnd.HasValue)
                list = (IOrderedQueryable<User>)list.Where(x => x.DeletingTime!.Value.Date <= search.DeletingTimeEnd);
        }

        if (!search.IsUndeleted)
            list = (IOrderedQueryable<User>)list.Where(x => x.IsDeleted);
        if (!search.IsDeleted)
            list = (IOrderedQueryable<User>)list.Where(x => !x.IsDeleted);

        switch (search.SortDirection)
        {
            case SortDirection.AscendingOrder:
                switch (search.SortItem)
                {
                    default:
                    case UserSortItem.None:
                    case UserSortItem.Id:
                        list = list.OrderBy(x => x.Id);
                        break;
                    case UserSortItem.LoginId:
                        list = list.OrderBy(x => x.LoginId);
                        break;
                    case UserSortItem.Name:
                        list = list.OrderBy(x => x.Name);
                        break;
                    case UserSortItem.SysPermission:
                        list = list.OrderBy(x => x.SysPermission);
                        break;
                    case UserSortItem.UmaMusumeTrpgPermission:
                        list = list.OrderBy(x => x.UmaMusumeTrpgPermission);
                        break;
                    case UserSortItem.Email:
                        list = list.OrderBy(x => x.Email);
                        break;
                    case UserSortItem.CreationThreadCount:
                        list = list.OrderBy(x => x.CreationThreadCount);
                        break;
                    case UserSortItem.TotalResCount:
                        list = list.OrderBy(x => x.TotalResCount);
                        break;
                    case UserSortItem.CreatingTime:
                        list = list.OrderBy(x => x.CreatingTime);
                        break;
                    case UserSortItem.UpdatingTime:
                        list = list.OrderBy(x => x.UpdatingTime);
                        break;
                    case UserSortItem.DeletingTime:
                        list = list.OrderBy(x => x.DeletingTime);
                        break;
                }

                break;
            case SortDirection.DescendingOrder:
                switch (search.SortItem)
                {
                    default:
                    case UserSortItem.None:
                        list = list.OrderBy(x => x.Id);
                        break;
                    case UserSortItem.Id:
                        list = list.OrderByDescending(x => x.Id);
                        break;
                    case UserSortItem.LoginId:
                        list = list.OrderByDescending(x => x.LoginId);
                        break;
                    case UserSortItem.Name:
                        list = list.OrderByDescending(x => x.Name);
                        break;
                    case UserSortItem.SysPermission:
                        list = list.OrderByDescending(x => x.SysPermission);
                        break;
                    case UserSortItem.UmaMusumeTrpgPermission:
                        list = list.OrderByDescending(x => x.UmaMusumeTrpgPermission);
                        break;
                    case UserSortItem.Email:
                        list = list.OrderByDescending(x => x.Email);
                        break;
                    case UserSortItem.CreationThreadCount:
                        list = list.OrderByDescending(x => x.CreationThreadCount);
                        break;
                    case UserSortItem.TotalResCount:
                        list = list.OrderByDescending(x => x.TotalResCount);
                        break;
                    case UserSortItem.CreatingTime:
                        list = list.OrderByDescending(x => x.CreatingTime);
                        break;
                    case UserSortItem.UpdatingTime:
                        list = list.OrderByDescending(x => x.UpdatingTime);
                        break;
                    case UserSortItem.DeletingTime:
                        list = list.OrderByDescending(x => x.DeletingTime);
                        break;
                }

                break;
            case SortDirection.None:
            default:
                list = list.OrderBy(x => x.Id);
                break;
        }

        list = list.ThenBy(x => x.Id);
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
        var user = new User
        {
            LoginId = item.LoginId,
            Name = item.Name,
            SysPermission = item.SysPermission,
            UmaMusumeTrpgPermission = item.UmaMusumeTrpgPermission,
            Email = item.Email,
            Password = item.Password,
            Token = guidService.NewGuid(),
            CreatingTime = timeService.NowTime(),
            UpdatingTime = timeService.NowTime()
        };
        user.PasswordHash();
        _ = dbContext.Add(user);
        _ = dbContext.SaveChanges();
        return (user.Id, user.Token);
    }

    public DetailItem Detail(DetailSelect select)
    {
        return new DetailItem(dbContext.Users.FirstOrDefault(x =>
            x.Id == select.Id && (string.IsNullOrEmpty(select.Token) ||
                                  (!string.IsNullOrEmpty(select.Token) && select.Token.Equals(x.Token)))));
    }

    public (int, string) Edit(EditItem item)
    {
        var user = dbContext.Users.FirstOrDefault(x => x.Id == item.Id && x.Token.Equals(item.Token));
        if (user == null) return (0, "");
        user.LoginId = item.LoginId;
        user.Name = item.Name;
        user.SysPermission = item.SysPermission;
        user.UmaMusumeTrpgPermission = item.UmaMusumeTrpgPermission;
        user.Email = item.Email;
        user.Token = guidService.NewGuid();
        user.UpdatingTime = timeService.NowTime();
        if (!string.IsNullOrEmpty(item.Password)) user.PasswordHash(item.Password);
        _ = dbContext.SaveChanges();
        return (user.Id, user.Token);
    }

    public (int, DateTime?) Delete(DeleteItem delete)
    {
        var user = dbContext.Users
            .FirstOrDefault(x => x.Id == delete.Id && x.Token.Equals(delete.Token));
        if (user == null) return (0, timeService.NowTime());
        user.DeletingTime = timeService.NowTime();
        user.IsDeleted = true;
        user.Token = guidService.NewGuid();
        _ = dbContext.SaveChanges();
        return (user.Id, user.DeletingTime);
    }

    public bool IsLoginIdDuplicate(IsLoginIdDuplicateItem item)
    {
        return dbContext.Users.Any(x => x.LoginId.Equals(item.LoginId) && !x.Id.Equals(item.Id) && !x.IsDeleted);
    }

    public List<NameListItem> GetNameList()
    {
        return dbContext.Users.Include(x => x.Threads).Where(x => x.Threads.Any(y => !y.IsDeleted)).OrderBy(x => x.Name)
            .Select(x => new NameListItem(x)).ToList();
    }

    public bool PasswordReset(int id, string password)
    {
        var user = dbContext.Users.FirstOrDefault(x => x.Id == id);
        if (user == null) return false;
        user.PasswordHash(password);
        _ = dbContext.SaveChanges();
        return true;
    }
}