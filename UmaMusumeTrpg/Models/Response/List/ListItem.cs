using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.Response.List;

public class ListItem(Entities.Response response) : BaseListItem(response.Id)
{
    public int ThreadResNo { get; set; } = response.ThreadResNo;
    public string Content { get; set; } = response.Content;
    public DateTime CreatingTime { get; set; } = response.CreatingTime;
}

public class ListItemForThread(Entities.Response response) : ListItem(response)
{
    public int CreatingUserId { get; set; } = response.CreatingUserId;
    public string CreatingUserName { get; set; } = response.CreatingUser.Name;
}

public class ListItemForUser(Entities.Response response) : ListItem(response)
{
    public int ThreadId { get; set; } = response.ThreadId;
    public string ThreadTitle { get; set; } = response.Thread.Title;
}