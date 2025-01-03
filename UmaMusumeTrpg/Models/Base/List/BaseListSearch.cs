using UmaMusumeTrpg.Enums;

namespace UmaMusumeTrpg.Models.Base.List;

public class BaseListSearch
{
    protected BaseListSearch()
    {
    }

    protected BaseListSearch(SortDirection sortDirection, int pageIndex, int pageSize)
    {
        SortDirection = sortDirection;
        PageIndex = pageIndex;
        PageSize = pageSize;
    }

    public SortDirection SortDirection { get; set; }
    public int PageIndex { get; set; }
    public int PageSize { get; set; }
}