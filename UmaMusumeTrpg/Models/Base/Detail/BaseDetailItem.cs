namespace UmaMusumeTrpg.Models.Base.Detail;

public class BaseDetailItem
{
    protected BaseDetailItem(int id, string token, DateTime creatingTime, DateTime updatingTime)
    {
        Id = id;
        Token = token;
        CreatingTime = creatingTime;
        UpdatingTime = updatingTime;
    }

    protected BaseDetailItem()
    {
    }

    public int Id { get; set; }
    public string Token { get; set; }
    public DateTime CreatingTime { get; set; }
    public DateTime UpdatingTime { get; set; }
}