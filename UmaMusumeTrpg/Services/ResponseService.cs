using Microsoft.EntityFrameworkCore;
using UmaMusumeTrpg.Entities;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.Base.List;
using UmaMusumeTrpg.Models.Response.Entry;
using UmaMusumeTrpg.Models.Response.List;

namespace UmaMusumeTrpg.Services;

public class ResponseService(UmaMusumeTrpgDbContext dbContext, IGuidService guidService, ITimeService timeService)
    : IResponseService
{
    public (List<ListItem>, int) GetList(ListSearch search)
    {
        var (list, length) =
            ListWithPageByGet(
                SortList(
                    SearchList((IOrderedQueryable<Response>)dbContext.Responses.Include(x => x.Thread).Where(x => true),
                        search), search), search);
        return (list.Select(x => new ListItem(x)).ToList(), length);
    }

    public (List<ListItemForThread>, int) GetList(ListSearchForThread search)
    {
        var list = (IOrderedQueryable<Response>)dbContext.Responses.Include(x => x.Thread).Where(x => true);

        if (search.ThreadId > 0)
            list = (IOrderedQueryable<Response>)list.Where(x => x.ThreadId == search.ThreadId);

        if (search.ThreadResNoBeginning > 0)
            list = (IOrderedQueryable<Response>)list.Where(x => x.ThreadResNo >= search.ThreadResNoBeginning);

        if (search.ThreadResNoEnd > 0)
            list = (IOrderedQueryable<Response>)list.Where(x => x.ThreadResNo <= search.ThreadResNoEnd);

        (list, var length) = ListWithPageByGet(SortList(SearchList(list, search), search), search);
        return (list.Include(x => x.CreatingUser).Select(x => new ListItemForThread(x)).ToList(), length);
    }

    public (List<ListItemForUser>, int) GetList(ListSearchForUser search)
    {
        var list = (IOrderedQueryable<Response>)dbContext.Responses.Include(x => x.Thread).Where(x => true);

        if (search.CreatingUserId > 0)
            list = (IOrderedQueryable<Response>)list.Where(x => x.CreatingUserId == search.CreatingUserId);

        (list, var length) = ListWithPageByGet(SortList(SearchList(list, search), search), search);
        return (list.Include(x => x.Thread).Select(x => new ListItemForUser(x)).ToList(), length);
    }

    public (int, string) Entry(EntryItem entry)
    {
        using var transaction = dbContext.Database.BeginTransaction();
        try
        {
            var response = new Response
            {
                ThreadId = entry.ThreadId,
                CreatingUserId = entry.CreatingUserId,
                Content = entry.Content,
                Token = guidService.NewGuid(),
                CreatingTime = timeService.NowTime()
            };
            response.Thread.ResCount += 1;
            response.Thread.UpdatingTime = timeService.NowTime();
            response.ThreadResNo = response.Thread.ResCount;
            response.CreatingUser.TotalResCount += 1;
            if (response.Thread.IsDeleted || !response.Thread.Token.Equals(entry.ThreadToken))
                throw new Exception();
            _ = dbContext.Add(response);
            _ = dbContext.SaveChanges();
            transaction.Commit();
            return (response.Id, response.Token);
        }
        catch
        {
            transaction.Rollback();
            return (0, "");
        }
    }

    private IOrderedQueryable<Response> SearchList(IOrderedQueryable<Response> list, ListSearch search)
    {
        if (!string.IsNullOrWhiteSpace(search.Content))
            list = (IOrderedQueryable<Response>)list.Where(x => x.Content.Contains(search.Content));

        if (search.CreatingTimeBeginning.HasValue)
            list = (IOrderedQueryable<Response>)list.Where(x =>
                x.CreatingTime.Date >= search.CreatingTimeBeginning.Value);

        if (search.CreatingTimeEnd.HasValue)
            list = (IOrderedQueryable<Response>)list.Where(x => x.CreatingTime.Date <= search.CreatingTimeEnd.Value);

        return list;
    }

    private IOrderedQueryable<Response> SortList(IOrderedQueryable<Response> list, ListSearch search)
    {
        switch (search.SortDirection)
        {
            case SortDirection.AscendingOrder:
                switch (search.SortItem)
                {
                    default:
                    case ResponseSortItem.None:
                    case ResponseSortItem.Id:
                        list = list.OrderBy(x => x.Id);
                        break;
                    case ResponseSortItem.ThreadId:
                        list = list.OrderBy(x => x.ThreadId);
                        break;
                    case ResponseSortItem.CreatingUserName:
                        list = list.OrderBy(x => x.CreatingUser.Name);
                        break;
                    case ResponseSortItem.ThreadResNo:
                        list = list.OrderBy(x => x.ThreadResNo);
                        break;
                    case ResponseSortItem.CreatingTime:
                        list = list.OrderBy(x => x.CreatingTime);
                        break;
                }

                break;
            case SortDirection.DescendingOrder:
                switch (search.SortItem)
                {
                    default:
                    case ResponseSortItem.None:
                        list = list.OrderBy(x => x.Id);
                        break;
                    case ResponseSortItem.Id:
                        list = list.OrderByDescending(x => x.Id);
                        break;
                    case ResponseSortItem.ThreadId:
                        list = list.OrderByDescending(x => x.ThreadId);
                        break;
                    case ResponseSortItem.CreatingUserName:
                        list = list.OrderByDescending(x => x.CreatingUser.Name);
                        break;
                    case ResponseSortItem.ThreadResNo:
                        list = list.OrderByDescending(x => x.ThreadResNo);
                        break;
                    case ResponseSortItem.CreatingTime:
                        list = list.OrderByDescending(x => x.CreatingTime);
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

    private (IOrderedQueryable<Response>, int) ListWithPageByGet(IOrderedQueryable<Response> list,
        BaseListSearch search)
    {
        var length = list.Count();
        var maxPage = Convert.ToInt32(Math.Ceiling((decimal)list.Count() / search.PageSize));
        if (maxPage > 0)
            list = maxPage > search.PageIndex
                ? (IOrderedQueryable<Response>)list.Skip(search.PageIndex * search.PageSize)
                : (IOrderedQueryable<Response>)list.Skip((maxPage - 1) * search.PageSize);
        list = (IOrderedQueryable<Response>)list.Take(search.PageSize);
        return (list, length);
    }
}