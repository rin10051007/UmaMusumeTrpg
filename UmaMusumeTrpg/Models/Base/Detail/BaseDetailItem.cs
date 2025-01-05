namespace UmaMusumeTrpg.Models.Base.Detail;

public class BaseDetailItem
{
    protected BaseDetailItem(int id, string token, DateTime updatingTime)
    {
        Id = id;
        Token = token;
        UpdatingTime = updatingTime;
    }

    protected BaseDetailItem()
    {
    }

    public int Id { get; set; }
    public string Token { get; set; }
    public DateTime UpdatingTime { get; set; }
}