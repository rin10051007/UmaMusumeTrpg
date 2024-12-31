using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.Detail;

namespace UmaMusumeTrpg.Models.User.Detail;

public class DetailItem : BaseDetailItem
{
    public DetailItem(Entities.User user) : base(user.Id, user.Name, user.Token, user.UpdateTime)
    {
        LoginId = user.LoginId;
        SysPermission = user.SysPermission;
        UmaMusumeTrpgPermission = user.UmaMusumeTrpgPermission;
        Email = user.Email;
        CreationTime = user.CreationTime;
        DeletingTime = user.DeletingTime;
        IsDeleted = user.IsDeleted;
    }

    public DetailItem()
    {
    }

    public string LoginId { get; set; }
    public SysPermission SysPermission { get; set; }
    public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
    public string Email { get; set; }
    public DateTime CreationTime { get; set; }
    public DateTime? DeletingTime { get; set; }
    public bool IsDeleted { get; set; }
}