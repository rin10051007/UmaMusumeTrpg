using UmaMusumeTrpg.Models.Base.Detail;

namespace UmaMusumeTrpg.Models.System.Detail
{
    public class DetailResponse : BaseDetailResponse
    {
        public DetailResponse(DetailItem detail) : base(detail)
        {
            Detail = detail;
        }

        public new DetailItem Detail { get; set; }
    }
}
