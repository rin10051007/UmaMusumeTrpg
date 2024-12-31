using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.User.List;

public class ListRequest(ListSearch search) : BaseListRequest(search)
{
    public new ListSearch Search { get; set; } = search;
}