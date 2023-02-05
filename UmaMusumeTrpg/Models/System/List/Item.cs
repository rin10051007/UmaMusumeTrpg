using UmaMusumeTrpg.Entitys;
using UmaMusumeTrpg.Enum;
using UmaMusumeTrpg.Models.Base;

namespace UmaMusumeTrpg.Models.System.List
{

    public class Item : BaseItem
    {
        public Item(int id, string name, SysPermission sysPermission, UmaMusumeTrpgPermission umaMusumeTrpgPermission) : base(id)
        {
            Name = name;
            SysPermission = sysPermission;
            UmaMusumeTrpgPermission = umaMusumeTrpgPermission;
        }
        public Item(User user) : base(user.ID)
        {
            Name = user.Name;
            SysPermission = user.SysPermission;
            UmaMusumeTrpgPermission = user.UmaMusumeTrpgPermission;
        }

        public string Name { get; set; }

        public SysPermission SysPermission { get; set; }
        public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
    }
}
