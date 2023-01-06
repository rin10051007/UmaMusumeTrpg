using UmaMusumeTrpg.Enum;
using UmaMusumeTrpg.Models.Base;

namespace UmaMusumeTrpg.Models.System.List
{

    public class Item : BaseItem
    {
        public string? Name { get; set; }

        public SysPermission SysPermission { get; set; }
        public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
    }
}
