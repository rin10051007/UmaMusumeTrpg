using UmaMusumeTrpg.Models.Base.Detail;

namespace UmaMusumeTrpg.Models.Thread.Detail;

public class DetailResponse(DetailItem detail) : BaseDetailResponse(detail)
{
    public new DetailItem Detail { get; set; } = detail;
}