﻿using UmaMusumeTrpg.Entities;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.User.Delete;
using UmaMusumeTrpg.Models.User.Detail;
using UmaMusumeTrpg.Models.User.Edit;
using UmaMusumeTrpg.Models.User.Entry;
using UmaMusumeTrpg.Models.User.IsLoginIdDuplicate;
using UmaMusumeTrpg.Models.User.List;

namespace UmaMusumeTrpg.Services;

public class UserService(
    UmaMusumeTrpgDbContext dbContext,
    IGuidService guidService,
    ITimeService timeService)
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

        if (search.CreationTimeStart.HasValue)
            list = (IOrderedQueryable<User>)list.Where(x =>
                DateTime.Compare(x.CreationTime.Date, search.CreationTimeStart.Value) >= 0);

        if (search.CreationTimeEnd.HasValue)
            list = (IOrderedQueryable<User>)list.Where(x => x.CreationTime.Date <= search.CreationTimeEnd.Value);

        if (search.UpdateTimeStart.HasValue)
            list = (IOrderedQueryable<User>)list.Where(x => x.UpdateTime.Date >= search.UpdateTimeStart);

        if (search.UpdateTimeEnd.HasValue)
            list = (IOrderedQueryable<User>)list.Where(x => x.UpdateTime.Date <= search.UpdateTimeEnd);

        if (search.IsDeleted > 0)
        {
            if (search.DeletedTimeStart.HasValue)
                list = (IOrderedQueryable<User>)list.Where(x =>
                    x.DeletingTime.HasValue && x.DeletingTime.Value.Date >= search.DeletedTimeStart);

            if (search.DeletedTimeEnd.HasValue)
                list = (IOrderedQueryable<User>)list.Where(x =>
                    x.DeletingTime.HasValue && x.DeletingTime.Value.Date <= search.DeletedTimeEnd);
        }

        if (!(search.IsUndeleted > 0))
            list = (IOrderedQueryable<User>)list.Where(x => x.IsDeleted == true);
        if (!(search.IsDeleted > 0))
            list = (IOrderedQueryable<User>)list.Where(x => x.IsDeleted == false);

        switch (search.SortDirection)
        {
            case SortDirection.AscendingOrder:
                switch (search.SortItem)
                {
                    default:
                    case SystemSortItem.None:
                    case SystemSortItem.Id:
                        list = list.OrderBy(x => x.Id);
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
                    case SystemSortItem.CreationThreadCount:
                        list = list.OrderBy(x => x.CreationThreadCount);
                        break;
                    case SystemSortItem.TotalResCount:
                        list = list.OrderBy(x => x.TotalResCount);
                        break;
                    case SystemSortItem.CreationTime:
                        list = list.OrderBy(x => x.CreationTime);
                        break;
                    case SystemSortItem.UpdateTime:
                        list = list.OrderBy(x => x.UpdateTime);
                        break;
                    case SystemSortItem.DeletingTime:
                        list = list.OrderBy(x => x.DeletingTime);
                        break;
                }

                break;
            case SortDirection.DescendingOrder:
                switch (search.SortItem)
                {
                    default:
                    case SystemSortItem.None:
                        list = list.OrderBy(x => x.Id);
                        break;
                    case SystemSortItem.Id:
                        list = list.OrderByDescending(x => x.Id);
                        break;
                    case SystemSortItem.LoginId:
                        list = list.OrderByDescending(x => x.LoginId);
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
                    case SystemSortItem.CreationThreadCount:
                        list = list.OrderByDescending(x => x.CreationThreadCount);
                        break;
                    case SystemSortItem.TotalResCount:
                        list = list.OrderByDescending(x => x.TotalResCount);
                        break;
                    case SystemSortItem.CreationTime:
                        list = list.OrderByDescending(x => x.CreationTime);
                        break;
                    case SystemSortItem.UpdateTime:
                        list = list.OrderByDescending(x => x.UpdateTime);
                        break;
                    case SystemSortItem.DeletingTime:
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
        User user = new()
        {
            LoginId = item.LoginId,
            Name = item.Name,
            SysPermission = item.SysPermission,
            UmaMusumeTrpgPermission = item.UmaMusumeTrpgPermission,
            Email = item.Email,
            Password = item.Password,
            Token = guidService.NewGuid(),
            CreationTime = timeService.NowTime(),
            UpdateTime = timeService.NowTime()
        };
        user.PasswordHash();
        _ = dbContext.Add(user);
        _ = dbContext.SaveChanges();
        return (user.Id, user.Token);
    }

    public DetailItem Detail(DetailSelect select)
    {
        return new DetailItem(dbContext.Users
            .FirstOrDefault(x => x.Id == select.Id && (string.IsNullOrEmpty(select.Token) ||
                                                       (!string.IsNullOrEmpty(select.Token) &&
                                                        select.Token.Equals(x.Token)))));
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
        user.UpdateTime = timeService.NowTime();
        if (!string.IsNullOrEmpty(item.Password)) user.PasswordHash(item.Password);
        _ = dbContext.SaveChanges();
        return (user.Id, user.Token);
    }

    public (int, DateTime?) Delete(DeleteItem item)
    {
        var user = dbContext.Users
            .FirstOrDefault(x => x.Id == item.Id && x.Token.Equals(item.Token));
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
}