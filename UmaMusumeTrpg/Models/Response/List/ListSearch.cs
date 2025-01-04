using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.Response.List;

public class ListSearch : BaseListSearch
{
    public ListSearch()
    {
    }

    public ListSearch(string content, DateTime creationTimeBeginning, DateTime creationTimeEnd,
        ResponseSortItem sortItem, SortDirection sortDirection, int pageIndex, int pageSize) : base(sortDirection,
        pageIndex, pageSize)
    {
        Content = content;
        CreationTimeBeginning = creationTimeBeginning;
        CreationTimeEnd = creationTimeEnd;
        SortItem = sortItem;
    }

    public string Content { get; set; } = "";
    public DateTime? CreationTimeBeginning { get; set; }
    public DateTime? CreationTimeEnd { get; set; }
    public ResponseSortItem SortItem { get; set; }
}

public class ListSearchForThread : ListSearch
{
    public ListSearchForThread()
    {
    }

    public ListSearchForThread(int threadId, int threadResNoBeginning, int threadResNoEnd, string content,
        DateTime creationTimeBeginning, DateTime creationTimeEnd, ResponseSortItem sortItem,
        SortDirection sortDirection, int pageIndex, int pageSize) : base(content, creationTimeBeginning,
        creationTimeEnd, sortItem, sortDirection, pageIndex, pageSize)
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

    public ListSearchForUser(int creatingUserId, string content, DateTime creationTimeBeginning,
        DateTime creationTimeEnd, ResponseSortItem sortItem, SortDirection sortDirection, int pageIndex,
        int pageSize) : base(content, creationTimeBeginning, creationTimeEnd, sortItem, sortDirection, pageIndex,
        pageSize)
    {
        CreatingUserId = creatingUserId;
    }

    public int CreatingUserId { get; set; }
}