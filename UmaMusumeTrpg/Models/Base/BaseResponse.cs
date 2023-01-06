namespace UmaMusumeTrpg.Models.Base
{
    public class BaseResponse
    {
        public BaseSearch? Search { get; set; }
        public List<BaseItem>? Items { get; set; }
        public int TotalCount { get; set; }
    }
}
