using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.System.User.List;

public class ListRequest : BaseListRequest
{
    public ListRequest(ListSearch search) : base(search)
    {
        Search = search;
    }

    public new ListSearch Search { get; set; }
}