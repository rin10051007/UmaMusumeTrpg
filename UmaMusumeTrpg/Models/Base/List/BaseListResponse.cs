using UmaMusumeTrpg.Models.Base.Public;

namespace UmaMusumeTrpg.Models.Base.List;

public class BaseListResponse(List<BaseListItem> items, int length, BaseListSearch search) : PublicBaseResponse
{
    public BaseListSearch Search { get; set; } = search;
    public List<BaseListItem> Items { get; set; } = items;
    public int Length { get; set; } = length;
}