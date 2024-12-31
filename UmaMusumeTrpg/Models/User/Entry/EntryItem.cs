using System.ComponentModel.DataAnnotations;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.Entry;

namespace UmaMusumeTrpg.Models.User.Entry;

public class EntryItem(
    string loginId,
    string name,
    SysPermission sysPermission,
    UmaMusumeTrpgPermission umaMusumeTrpgPermission,
    string email,
    string password,
    string passwordCfm)
    : BaseEntryItem
{
    [Required] public string LoginId { get; set; } = loginId;

    [Required] public string Name { get; set; } = name;

    [Required] public SysPermission SysPermission { get; set; } = sysPermission;

    [Required] public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; } = umaMusumeTrpgPermission;

    [Required] public string Email { get; set; } = email;

    [Required] public string Password { get; set; } = password;
    [Required] public string PasswordCfm { get; set; } = passwordCfm;
}