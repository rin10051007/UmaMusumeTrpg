using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.Entry;

namespace UmaMusumeTrpg.Models.System.Entry;

public class EntryItem : BaseEntryItem
{
    public EntryItem(string loginId, string name, SysPermission sysPermission,
        UmaMusumeTrpgPermission umaMusumeTrpgPermission,
        string email, string password) : base(name)
    {
        LoginId = loginId;
        SysPermission = sysPermission;
        UmaMusumeTrpgPermission = umaMusumeTrpgPermission;
        Email = email;
        Password = password;
    }

    public string LoginId { get; set; }
    public SysPermission SysPermission { get; set; }
    public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
}