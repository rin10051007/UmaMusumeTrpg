using UmaMusumeTrpg.Models.Base;

namespace UmaMusumeTrpg.Models.System.List
{
    public class Response : BaseResponse
    {
        public new Search? Search { get; set; }
        public new List<Item>? Items { get; set; }
    }
}
