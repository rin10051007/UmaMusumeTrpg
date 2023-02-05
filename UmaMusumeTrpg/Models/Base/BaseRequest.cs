namespace UmaMusumeTrpg.Models.Base
{
    public class BaseRequest
    {
        public BaseRequest(BaseSearch search)
        {
            Search = search;
        }

        public BaseSearch Search { get; set; }
    }
}
