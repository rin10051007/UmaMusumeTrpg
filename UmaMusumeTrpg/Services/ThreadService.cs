using Microsoft.EntityFrameworkCore;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.Base.List;
using UmaMusumeTrpg.Models.Thread.Delete;
using UmaMusumeTrpg.Models.Thread.Detail;
using UmaMusumeTrpg.Models.Thread.Entry;
using UmaMusumeTrpg.Models.Thread.List;
using Thread = UmaMusumeTrpg.Entities.Thread;

namespace UmaMusumeTrpg.Services;

public class ThreadService(UmaMusumeTrpgDbContext dbContext, IGuidService guidService, ITimeService timeService)
    : IThreadService
{
    public (List<ListItem>, int) GetList(ListSearch search)
    {
        var (list, length) =
            ListWithPageByGet(
                SortList(SearchList((IOrderedQueryable<Thread>)dbContext.Threads.Where(x => true), search), search),
                search);
        return (list.Include(x => x.CreatingUser).Select(x => new ListItem(x)).ToList(), length);
    }

    public (List<ListItemForThread>, int) GetList(ListSearchForThread search)
    {
        var (list, length) =
            ListWithPageByGet(
                SortList(SearchListForThread((IOrderedQueryable<Thread>)dbContext.Threads.Where(x => true), search),
                    search), search);
        return (list.Include(x => x.CreatingUser).Select(x => new ListItemForThread(x)).ToList(), length);
    }

    public (List<ListItemForSystemThread>, int) GetList(ListSearchForSystemThread search)
    {
        var list = (IOrderedQueryable<Thread>)dbContext.Threads.Where(x => true);

        if (search.CreationUserId > 0)
            list = (IOrderedQueryable<Thread>)list.Where(x => x.CreatingUserId == search.CreationUserId);

        (list, var length) =
            ListWithPageByGet(SortList(SearchList(SearchListForThread(list, search), search), search), search);

        return (list.Include(x => x.CreatingUser).Select(x => new ListItemForSystemThread(x)).ToList(), length);
    }

    public (List<ListItemForUser>, int) GetList(ListSearchForUser search)
    {
        var list = (IOrderedQueryable<Thread>)dbContext.Threads.Where(x => true);

        if (search.CreationUserId > 0)
            list = (IOrderedQueryable<Thread>)list.Where(x => x.CreatingUserId == search.CreationUserId);

        (list, var length) = ListWithPageByGet(SortList(SearchList(list, search), search), search);

        return (list.Include(x => x.CreatingUser).Select(x => new ListItemForUser(x)).ToList(), length);
    }

    public (int, string) Entry(EntryItem entry)
    {
        using var transaction = dbContext.Database.BeginTransaction();
        try
        {
            var thread = new Thread
            {
                CreatingUserId = entry.CreatingUserId,
                Title = entry.Title,
                Token = guidService.NewGuid(),
                CreationTime = timeService.NowTime(),
                UpdateTime = timeService.NowTime()
            };
            thread.CreatingUser.CreationThreadCount += 1;
            _ = dbContext.Add(thread);
            _ = dbContext.SaveChanges();
            return (thread.Id, thread.Token);
        }
        catch
        {
            transaction.Rollback();
            return (0, "");
        }
    }

    public (int, DateTime?) Delete(DeleteItem delete)
    {
        var thread = dbContext.Threads.FirstOrDefault(x => x.Id == delete.Id && x.Token.Equals(delete.Token));
        if (thread == null) return (0, timeService.NowTime());
        thread.DeletingTime = timeService.NowTime();
        thread.IsDeleted = true;
        thread.Token = guidService.NewGuid();
        _ = dbContext.SaveChanges();
        return (thread.Id, thread.DeletingTime);
    }

    public DetailItem Detail(DetailSelect select)
    {
        return new DetailItem(dbContext.Threads.FirstOrDefault(x =>
            x.Id == select.Id && (string.IsNullOrEmpty(select.Token) ||
                                  (!string.IsNullOrEmpty(select.Token) && select.Token.Equals(x.Token)))));
    }

    private IOrderedQueryable<Thread> SearchListForThread(IOrderedQueryable<Thread> list, ListSearchForThread search)
    {
        if (search.CreationTimeBeginning.HasValue)
            list = (IOrderedQueryable<Thread>)list.Where(x => x.CreationTime >= search.CreationTimeBeginning);

        if (search.CreationTimeEnd.HasValue)
            list = (IOrderedQueryable<Thread>)list.Where(x => x.CreationTime <= search.CreationTimeEnd);

        if (search.UpdateTimeBeginning.HasValue)
            list = (IOrderedQueryable<Thread>)list.Where(x => x.UpdateTime >= search.UpdateTimeBeginning);

        if (search.UpdateTimeEnd.HasValue)
            list = (IOrderedQueryable<Thread>)list.Where(x => x.UpdateTime <= search.UpdateTimeEnd);

        if (search.IsDeleted)
        {
            if (search.DeletingTimeBeginning.HasValue)
                list = (IOrderedQueryable<Thread>)list.Where(x => x.DeletingTime >= search.DeletingTimeBeginning);

            if (search.DeletingTimeEnd.HasValue)
                list = (IOrderedQueryable<Thread>)list.Where(x => x.DeletingTime <= search.DeletingTimeEnd);
        }

        return list;
    }

    private IOrderedQueryable<Thread> SearchList(IOrderedQueryable<Thread> list, ListSearch search)
    {
        if (!string.IsNullOrWhiteSpace(search.Title))
            list = (IOrderedQueryable<Thread>)list.Where(x => x.Title.Contains(search.Title));

        if (search.ResCountMin > 0)
            list = (IOrderedQueryable<Thread>)list.Where(x => x.ResCount >= search.ResCountMin);

        if (search.ResCountMax > 0)
            list = (IOrderedQueryable<Thread>)list.Where(x => x.ResCount <= search.ResCountMin);

        if (!search.IsUndeleted)
            list = (IOrderedQueryable<Thread>)list.Where(x => x.IsDeleted);

        if (!search.IsDeleted)
            list = (IOrderedQueryable<Thread>)list.Where(x => !x.IsDeleted);

        return list;
    }

    private IOrderedQueryable<Thread> SortList(IOrderedQueryable<Thread> list, ListSearch search)
    {
        switch (search.SortDirection)
        {
            case SortDirection.AscendingOrder:
                switch (search.SortItem)
                {
                    default:
                    case ThreadSortItem.None:
                    case ThreadSortItem.Id:
                        list = list.OrderBy(x => x.Id);
                        break;
                    case ThreadSortItem.CreatingUserId:
                        list = list.OrderBy(x => x.CreatingUserId);
                        break;
                    case ThreadSortItem.Title:
                        list = list.OrderBy(x => x.Title);
                        break;
                    case ThreadSortItem.ResCount:
                        list = list.OrderBy(x => x.ResCount);
                        break;
                    case ThreadSortItem.CreationTime:
                        list = list.OrderBy(x => x.CreationTime);
                        break;
                    case ThreadSortItem.UpdateTime:
                        list = list.OrderBy(x => x.UpdateTime);
                        break;
                }

                break;
            case SortDirection.DescendingOrder:
                switch (search.SortItem)
                {
                    default:
                    case ThreadSortItem.None:
                        list = list.OrderBy(x => x.Id);
                        break;
                    case ThreadSortItem.Id:
                        list = list.OrderByDescending(x => x.Id);
                        break;
                    case ThreadSortItem.CreatingUserId:
                        list = list.OrderByDescending(x => x.CreatingUserId);
                        break;
                    case ThreadSortItem.Title:
                        list = list.OrderByDescending(x => x.Title);
                        break;
                    case ThreadSortItem.ResCount:
                        list = list.OrderByDescending(x => x.ResCount);
                        break;
                    case ThreadSortItem.CreationTime:
                        list = list.OrderByDescending(x => x.CreationTime);
                        break;
                    case ThreadSortItem.UpdateTime:
                        list = list.OrderByDescending(x => x.UpdateTime);
                        break;
                }

                break;
            case SortDirection.None:
            default:
                list = list.OrderBy(x => x.Id);
                break;
        }

        return list.ThenBy(x => x.Id);
    }

    private (IOrderedQueryable<Thread>, int) ListWithPageByGet(IOrderedQueryable<Thread> list,
        BaseListSearch search)
    {
        var length = list.Count();
        var maxPage = Convert.ToInt32(Math.Ceiling((decimal)list.Count() / search.PageSize));
        if (maxPage > 0)
            list = maxPage > search.PageIndex
                ? (IOrderedQueryable<Thread>)list.Skip(search.PageIndex * search.PageSize)
                : (IOrderedQueryable<Thread>)list.Skip((maxPage - 1) * search.PageSize);
        list = (IOrderedQueryable<Thread>)list.Take(search.PageSize);
        return (list, length);
    }
}