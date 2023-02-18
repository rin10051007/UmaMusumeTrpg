namespace UmaMusumeTrpg.Models.Base.List
{
    public class BaseListRequest
    {
        public BaseListRequest(BaseListSearch search)
        {
            Search = search;
        }

        public BaseListSearch Search { get; set; }
    }
}
