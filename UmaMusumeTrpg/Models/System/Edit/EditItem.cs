using UmaMusumeTrpg.Enum;
using UmaMusumeTrpg.Models.Base.Edit;

namespace UmaMusumeTrpg.Models.System.Edit
{
    public class EditItem : BaseEditItem
    {
        public SysPermission SysPermission { get; set; }
        public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
