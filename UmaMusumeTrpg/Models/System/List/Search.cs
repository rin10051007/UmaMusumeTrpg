using UmaMusumeTrpg.Enum;
using UmaMusumeTrpg.Models.Base;

namespace UmaMusumeTrpg.Models.System.List
{
    public class Search : BaseSearch
    {
        public Search(string name, SotrDirection sortDirection, UmaMusumeTrpgPermission umaMusumeTrpgPermission, SystemSortItem sortItem, int displayPage, int displayCount) : base(sortDirection, displayPage, displayCount)
        {
            Name = name;
            SortDirection = sortDirection;
            UmaMusumeTrpgPermission = umaMusumeTrpgPermission;
            SortItem = SortItem;

        }

        public string Name { get; set; }
        public SysPermission SysPermission { get; set; }
        public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
        public SystemSortItem SortItem { get; set; }
    }
}
