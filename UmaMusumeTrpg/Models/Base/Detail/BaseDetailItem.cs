namespace UmaMusumeTrpg.Models.Base.Detail;

public class BaseDetailItem
{
    protected BaseDetailItem(int id, string token, DateTime updateTime)
    {
        Id = id;
        Token = token;
        UpdateTime = updateTime;
    }

    protected BaseDetailItem()
    {
    }

    public int Id { get; set; }
    public string Token { get; set; }
    public DateTime UpdateTime { get; set; }
}