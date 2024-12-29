using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.System.User.List;

public class ListItem(Entitys.User user) : BaseListItem(user.Id)
{
    public string LoginId { get; set; } = user.LoginId;
    public string Name { get; set; } = user.Name;
    public SysPermission SysPermission { get; set; } = user.SysPermission;
    public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; } = user.UmaMusumeTrpgPermission;
    public string Email { get; set; } = user.Email;
    public int CreationThreadCount { get; set; } = user.CreationThreadCount;
    public int TotalResCount { get; set; } = user.TotalResCount;
    public DateTime CreateTime { get; set; } = user.CreateTime;
    public DateTime UpdateTime { get; set; } = user.UpdateTime;
    public DateTime? DeleteTime { get; set; } = user.DeleteTime;
    public bool IsDeleted { get; set; } = user.IsDeleted;
}