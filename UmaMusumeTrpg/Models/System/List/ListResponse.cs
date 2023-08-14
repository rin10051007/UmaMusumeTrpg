using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.System.List;

public class ListResponse : BaseListResponse
{
    public ListResponse(List<ListItem> items, int totalCount, ListSearch search) : base(new List<BaseListItem>
    {
        new(1)
    }, totalCount, search)
    {
        Search = search;
        Items = items;
    }

    public new ListSearch Search { get; set; }
    public new List<ListItem> Items { get; set; }
}