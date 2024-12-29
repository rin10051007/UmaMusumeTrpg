using UmaMusumeTrpg.Models.Base.Public;

namespace UmaMusumeTrpg.Models.Base.Detail;

public class BaseDetailResponse(BaseDetailItem detail) : PublicBaseResponse
{
    public BaseDetailItem Detail { get; set; } = detail;
}