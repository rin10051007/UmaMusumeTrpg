using UmaMusumeTrpg.Models.System.List;

namespace UmaMusumeTrpg.Models.Base
{
    public class BaseResponse
    {
        public BaseResponse(List<BaseItem> items, int totalCount, BaseSearch? search)
        {
            Search = search;
            Items = items;
            TotalCount = totalCount;
        }

        public BaseSearch? Search { get; set; }
        public List<BaseItem> Items { get; set; }
        public int TotalCount { get; set; }
    }
}
