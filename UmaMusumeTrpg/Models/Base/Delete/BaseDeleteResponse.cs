namespace UmaMusumeTrpg.Models.Base.Delete;

public class BaseDeleteResponse
{
    public BaseDeleteResponse(int id, DateTime? dateTime)
    {
        Id = id;
        DeleteTime = dateTime;
    }

    public int Id { get; set; }
    public DateTime? DeleteTime { get; set; }
}