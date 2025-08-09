using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.Thread.List;

public class ListItem(Entities.Thread thread) : BaseListItem(thread.Id)
{
    public string Title { get; set; } = thread.Title;
    public int ResCount { get; set; } = thread.ResCount;
    public DateTime CreatingTime { get; set; } = thread.CreatingTime;
    public DateTime UpdatingTime { get; set; } = thread.UpdatingTime;
}

public class ListItemForThread(Entities.Thread thread) : ListItem(thread)
{
    public int CreatingUserId { get; set; } = thread.CreatingUserId;
    public string CreatingUserName { get; set; } = thread.CreatingUser.Name;
}

public class ListItemForSystemThread(Entities.Thread thread) : ListItemForThread(thread)
{
    public DateTime? DeletingTime { get; set; } = thread.DeletingTime;
    public bool IsActive { get; set; } = thread.IsActive;
    public bool IsDeleted { get; set; } = thread.IsDeleted;
}

public class ListItemForUser(Entities.Thread thread) : ListItem(thread)
{
    public DateTime? DeletingTime { get; set; } = thread.DeletingTime;
    public bool IsDeleted { get; set; } = thread.IsDeleted;
}