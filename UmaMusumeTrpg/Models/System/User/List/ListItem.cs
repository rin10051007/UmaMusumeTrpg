using UmaMusumeTrpg.Entitys;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.System.List;

public class ListItem : BaseListItem
{
    public ListItem(int id, string loginId, string name, SysPermission sysPermission,
        UmaMusumeTrpgPermission umaMusumeTrpgPermission, string email, int creationThreadCount, int totalResCount,
        DateTime createTime, DateTime updateTime,
        DateTime? deleteTime, bool isDeleted) : base(id)
    {
        LoginId = loginId;
        Name = name;
        SysPermission = sysPermission;
        UmaMusumeTrpgPermission = umaMusumeTrpgPermission;
        Email = email;
        CreationThreadCount = creationThreadCount;
        TotalResCount = totalResCount;
        CreateTime = createTime;
        UpdateTime = updateTime;
        DeleteTime = deleteTime;
        IsDeleted = isDeleted;
    }

    public ListItem(User user) : base(user.ID)
    {
        LoginId = user.LoginId;
        Name = user.Name;
        SysPermission = user.SysPermission;
        UmaMusumeTrpgPermission = user.UmaMusumeTrpgPermission;
        Email = user.Email;
        CreationThreadCount = user.CreationThreadCount;
        TotalResCount = user.TotalResCount;
        CreateTime = user.CreateTime;
        UpdateTime = user.UpdateTime;
        DeleteTime = user.DeleteTime;
        IsDeleted = user.IsDeleted;
    }

    public string LoginId { get; set; }
    public string Name { get; set; }
    public SysPermission SysPermission { get; set; }
    public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
    public string Email { get; set; }
    public int CreationThreadCount { get; set; }
    public int TotalResCount { get; set; }
    public DateTime CreateTime { get; set; }
    public DateTime UpdateTime { get; set; }
    public DateTime? DeleteTime { get; set; }
    public bool IsDeleted { get; set; }
}