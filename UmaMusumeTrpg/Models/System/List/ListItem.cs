using UmaMusumeTrpg.Entitys;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.System.List
{

    public class ListItem : BaseListItem
    {
        public ListItem(int id, string name, SysPermission sysPermission, UmaMusumeTrpgPermission umaMusumeTrpgPermission) : base(id)
        {
            Name = name;
            SysPermission = sysPermission;
            UmaMusumeTrpgPermission = umaMusumeTrpgPermission;
        }
        public ListItem(User user) : base(user.ID)
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
