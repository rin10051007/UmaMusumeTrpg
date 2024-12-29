using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.Edit;

namespace UmaMusumeTrpg.Models.System.User.Edit;

public class EditItem : BaseEditItem
{
    public string LoginId { get; set; }
    public string Name { get; set; }
    public SysPermission SysPermission { get; set; }
    public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
}