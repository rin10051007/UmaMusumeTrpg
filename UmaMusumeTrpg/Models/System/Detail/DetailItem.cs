using UmaMusumeTrpg.Entitys;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.Detail;

namespace UmaMusumeTrpg.Models.System.Detail
{
    public class DetailItem : BaseDetailItem
    {
        public DetailItem(User user) : base(user.ID, user.Name, user.Token, user.UpdateTime)
        {
            LoginId = user.LoginId;
            SysPermission = user.SysPermission;
            UmaMusumeTrpgPermission = user.UmaMusumeTrpgPermission;
            Email = user.Email;
            CreateTime = user.CreateTime;
            DeleteTime = user.DeleteTime;
            IsDeleted = user.IsDeleted;
        }
        public string LoginId { get; set; }
        public SysPermission SysPermission { get; set; }
        public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
        public string Email { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime? DeleteTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}
