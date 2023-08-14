using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.System.List;

public class ListSearch : BaseListSearch
{
    public ListSearch() : base(){}
    public ListSearch(string name, SotrDirection sortDirection, UmaMusumeTrpgPermission umaMusumeTrpgPermission,
        SystemSortItem sortItem, int displayPage, int displayCount) : base(sortDirection, displayPage, displayCount)
    {
        Name = name;
        SortDirection = sortDirection;
        UmaMusumeTrpgPermission = umaMusumeTrpgPermission;
        SortItem = sortItem;
    }

    public string Name { get; set; }
    public SysPermission SysPermission { get; set; }
    public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
    public SystemSortItem SortItem { get; set; }
}