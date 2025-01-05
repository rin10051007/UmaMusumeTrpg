using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.Detail;

namespace UmaMusumeTrpg.Models.User.Detail;

public class DetailItem : BaseDetailItem
{
    public DetailItem()
    {
    }

    public DetailItem(Entities.User user) : base(user.Id, user.Token, user.UpdateTime)
    {
        LoginId = user.LoginId;
        Name = user.Name;
        SysPermission = user.SysPermission;
        UmaMusumeTrpgPermission = user.UmaMusumeTrpgPermission;
        Email = user.Email;
        CreationThreadCount = user.CreationThreadCount;
        TotalResCount = user.TotalResCount;
        CreationTime = user.CreationTime;
        DeletingTime = user.DeletingTime;
        IsDeleted = user.IsDeleted;
    }

    public string LoginId { get; set; }
    public string Name { get; set; }
    public SysPermission SysPermission { get; set; }
    public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
    public string Email { get; set; }
    public int CreationThreadCount { get; set; }
    public int TotalResCount { get; set; }
    public DateTime CreationTime { get; set; }
    public DateTime? DeletingTime { get; set; }
    public bool IsDeleted { get; set; }
}