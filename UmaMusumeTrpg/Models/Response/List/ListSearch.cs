using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.Response.List;

public class ListSearch : BaseListSearch
{
    public ListSearch()
    {
    }

    public ListSearch(SortDirection sortDirection, int pageIndexIndex, int pageSize) : base(sortDirection,
        pageIndexIndex, pageSize)
    {
    }

    public int ThreadId { get; set; }
    public int CreatingUserId { get; set; }
    public string Content { get; set; } = "";
    public int ThreadResNo { get; set; }

    public ResponseSortItem SortItem { get; set; }
}

public class ListSearchForThread : ListSearch
{
}

public class ListSearchForUser : ListSearch
{
}