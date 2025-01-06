using UmaMusumeTrpg.Models.Base.Public;

namespace UmaMusumeTrpg.Models.User.NameList;

public class NameListResponse(List<NameListItem> items) : PublicBaseResponse
{
    public List<NameListItem> Items { get; set; } = items;
}