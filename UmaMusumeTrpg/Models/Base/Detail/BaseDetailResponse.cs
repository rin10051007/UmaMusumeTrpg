namespace UmaMusumeTrpg.Models.Base.Detail
{
    public class BaseDetailResponse
    {
        public BaseDetailResponse(BaseDetailItem detail)
        {
            Detail = detail;
        }
        public BaseDetailItem Detail { get; set; }
    }
}
