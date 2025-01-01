using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.Response.List;

public class ListResponse(List<ListItem> items, int length, ListSearch search)
    : BaseListResponse(items.Cast<BaseListItem>().ToList(), length, search)
{
    public new ListSearch Search { get; set; } = search;
    public new List<ListItem> Items { get; set; } = items;
}

public class ListResponseForThread(List<ListItemForThread> items, int length, ListSearchForThread search)
    : ListResponse(items.Cast<ListItem>().ToList(), length, search)
{
    public new ListSearchForThread Search { get; set; } = search;
    public new List<ListItemForThread> Items { get; set; } = items;
}

public class ListResponseForUser(List<ListItemForUser> items, int length, ListSearchForUser search)
    : ListResponse(items.Cast<ListItem>().ToList(), length, search)
{
    public new ListSearchForUser Search { get; set; } = search;
    public new List<ListItemForUser> Items { get; set; } = items;
}