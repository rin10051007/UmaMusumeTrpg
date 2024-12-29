namespace UmaMusumeTrpg.Models.Base.List;

public class BaseListRequest(BaseListSearch search)
{
    public BaseListSearch Search { get; set; } = search;
}