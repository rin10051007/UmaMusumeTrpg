using UmaMusumeTrpg.Models.Base.Public;

namespace UmaMusumeTrpg.Models.Base.Detail;

public class BaseDetailResponse : PublicBaseResponse
{
    public BaseDetailResponse(BaseDetailItem detail)
    {
        Detail = detail;
    }

    public BaseDetailItem Detail { get; set; }
}