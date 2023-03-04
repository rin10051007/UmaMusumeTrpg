using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.System.List
{
    public class ListResponse : BaseListResponse
    {
        private readonly ListRequest? request;

        public ListResponse(List<ListItem> items, int totalCount, ListSearch? search) : base(items: new List<BaseListItem>
        {
            new BaseListItem(1)
        }, totalCount, search)
        {
            Search = search;
            Items = items;
        }

        public new ListSearch Search { get; set; }
        public new List<ListItem> Items { get; set; }
    }
}
