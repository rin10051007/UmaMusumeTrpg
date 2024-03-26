using UmaMusumeTrpg.Models.Base.Public;

namespace UmaMusumeTrpg.Models.Base.Delete;

public class BaseDeleteResponse : PublicBaseResponse
{
    public BaseDeleteResponse(int id, DateTime? dateTime)
    {
        Id = id;
        DeleteTime = dateTime;
    }

    public int Id { get; set; }
    public DateTime? DeleteTime { get; set; }
}