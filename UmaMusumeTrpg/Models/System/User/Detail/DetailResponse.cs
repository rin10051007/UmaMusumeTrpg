using UmaMusumeTrpg.Models.Base.Detail;

namespace UmaMusumeTrpg.Models.System.User.Detail;

public class DetailResponse(DetailItem detail) : BaseDetailResponse(detail)
{
    public new DetailItem Detail { get; set; } = detail;
}