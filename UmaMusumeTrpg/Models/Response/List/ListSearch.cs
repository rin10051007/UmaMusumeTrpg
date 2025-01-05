using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.Response.List;

public class ListSearch : BaseListSearch
{
    public ListSearch()
    {
    }

    public ListSearch(string content, DateTime creatingTimeBeginning, DateTime creatingTimeEnd,
        ResponseSortItem sortItem, SortDirection sortDirection, int pageIndex, int pageSize) : base(sortDirection,
        pageIndex, pageSize)
    {
        Content = content;
        CreatingTimeBeginning = creatingTimeBeginning;
        CreatingTimeEnd = creatingTimeEnd;
        SortItem = sortItem;
    }

    public string Content { get; set; } = "";
    public DateTime? CreatingTimeBeginning { get; set; }
    public DateTime? CreatingTimeEnd { get; set; }
    public ResponseSortItem SortItem { get; set; }
}

public class ListSearchForThread : ListSearch
{
    public ListSearchForThread()
    {
    }

    public ListSearchForThread(int threadId, int threadResNoBeginning, int threadResNoEnd, string content,
        DateTime creatingTimeBeginning, DateTime creatingTimeEnd, ResponseSortItem sortItem,
        SortDirection sortDirection, int pageIndex, int pageSize) : base(content, creatingTimeBeginning,
        creatingTimeEnd, sortItem, sortDirection, pageIndex, pageSize)
    {
        ThreadId = threadId;
        ThreadResNoBeginning = threadResNoBeginning;
        ThreadResNoEnd = threadResNoEnd;
    }

    public int ThreadId { get; set; }
    public int ThreadResNoBeginning { get; set; }
    public int ThreadResNoEnd { get; set; }
}

public class ListSearchForUser : ListSearch
{
    public ListSearchForUser()
    {
    }

    public ListSearchForUser(int creatingUserId, string content, DateTime creatingTimeBeginning,
        DateTime creatingTimeEnd, ResponseSortItem sortItem, SortDirection sortDirection, int pageIndex,
        int pageSize) : base(content, creatingTimeBeginning, creatingTimeEnd, sortItem, sortDirection, pageIndex,
        pageSize)
    {
        CreatingUserId = creatingUserId;
    }

    public int CreatingUserId { get; set; }
}