using UmaMusumeTrpg.Models.Base.Public;

namespace UmaMusumeTrpg.Models.Base.Delete;

public class BaseDeleteResponse(int id, DateTime? dateTime) : PublicBaseResponse
{
    public int Id { get; set; } = id;
    public DateTime? DeletingTime { get; set; } = dateTime;
}