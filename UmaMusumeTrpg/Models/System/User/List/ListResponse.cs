using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.System.User.List;

public class ListResponse : BaseListResponse
{
    public ListResponse(List<ListItem> items, int length, ListSearch search) : base([new BaseListItem(1)], length,
        search)
    {
        Search = search;
        Items = items;
    }

    public new ListSearch Search { get; set; }
    public new List<ListItem> Items { get; set; }
}