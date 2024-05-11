using UmaMusumeTrpg.Models.Base.Public;

namespace UmaMusumeTrpg.Models.Base.List;

public class BaseListResponse : PublicBaseResponse
{
    protected BaseListResponse(List<BaseListItem> items, int length, BaseListSearch search)
    {
        Search = search;
        Items = items;
        Length = length;
    }

    public BaseListSearch Search { get; set; }
    public List<BaseListItem> Items { get; set; }
    public int Length { get; set; }
}