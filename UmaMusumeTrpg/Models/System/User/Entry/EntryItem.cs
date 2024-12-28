using System.ComponentModel.DataAnnotations;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.Entry;

namespace UmaMusumeTrpg.Models.System.Entry;

public class EntryItem : BaseEntryItem
{
    public EntryItem(string loginId, string name, SysPermission sysPermission,
        UmaMusumeTrpgPermission umaMusumeTrpgPermission,
        string email, string password, string passwordCfm)
    {
        LoginId = loginId;
        Name = name;
        SysPermission = sysPermission;
        UmaMusumeTrpgPermission = umaMusumeTrpgPermission;
        Email = email;
        Password = password;
        PasswordCfm = passwordCfm;
    }

    [Required] public string LoginId { get; set; }

    [Required] public string Name { get; set; }

    [Required] public SysPermission SysPermission { get; set; }

    [Required] public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }

    [Required] public string Email { get; set; }

    [Required] public string Password { get; set; }
    [Required] public string PasswordCfm { get; set; }
}