using UmaMusumeTrpg.Enum;
using UmaMusumeTrpg.Models.Base;

namespace UmaMusumeTrpg.Models.System.List
{
    public class Search : BaseSearch
    {
        public string? Name { get; set; }
        public List<SysPermission>? SysPermissions { get; set; }
        public List<UmaMusumeTrpgPermission>? UmaMusumeTrpgPermissions { get; set; }
        public SystemSortItem SortItem { get; set; }
    }
}
