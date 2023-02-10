using UmaMusumeTrpg.Models.Base;

namespace UmaMusumeTrpg.Models.System.List
{
    public class Response : BaseResponse
    {
        private Request? request;
        private int v;

        public Response(List<Item> items, int totalCount, Search? search) : base(items: new List<BaseItem>
        {
            new BaseItem(1)
        }, totalCount, search)
        {
            Search = search;
            Items = items;
        }

        public new Search Search { get; set; }
        public new List<Item> Items { get; set; }
    }
}
