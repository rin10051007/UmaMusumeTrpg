using UmaMusumeTrpg.Models.Base.Detail;

namespace UmaMusumeTrpg.Models.Thread.Detail;

public class DetailItem : BaseDetailItem
{
    public DetailItem()
    {
    }

    public DetailItem(Entities.Thread thread) : base(thread.Id, thread.Token, thread.UpdatingTime)
    {
        CreatingUserId = thread.CreatingUserId;
        CreatingUserName = thread.CreatingUser.Name;
        Title = thread.Title;
        ResCount = thread.ResCount;
    }

    public int CreatingUserId { get; set; }
    public string CreatingUserName { get; set; }
    public string Title { get; set; }
    public int ResCount { get; set; }
}