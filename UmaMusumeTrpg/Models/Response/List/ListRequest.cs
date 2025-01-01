using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.Response.List;

public class ListRequest(ListSearch search) : BaseListRequest(search)
{
    public new ListSearch Search { get; set; } = search;
}

public class ListRequestForThread(ListSearchForThread search) : ListRequest(search)
{
    public new ListSearchForThread Search { get; set; } = search;
}

public class ListRequestForUser(ListSearchForUser search) : ListRequest(search)
{
    public new ListSearchForUser Search { get; set; } = search;
}