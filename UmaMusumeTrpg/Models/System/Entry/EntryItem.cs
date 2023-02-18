using UmaMusumeTrpg.Enum;
using UmaMusumeTrpg.Models.Base.Entry;

namespace UmaMusumeTrpg.Models.System.Entry
{
    public class EntryItem : BaseEntryItem
    {
        public EntryItem(string name, SysPermission sysPermission,
            UmaMusumeTrpgPermission umaMusumeTrpgPermission,
            string email, string password) : base(name)
        {
            SysPermission = sysPermission;
            UmaMusumeTrpgPermission = umaMusumeTrpgPermission;
            Email = email;
            Password = password;
        }
        public SysPermission SysPermission { get; set; }
        public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}

