using UmaMusumeTrpg.Models.Base;

namespace UmaMusumeTrpg.Models.System.List
{
    public class Request : BaseRequest
    {
        public Request(Search search) : base(search)
        {
            Search = search;
        }

        public new Search Search { get; set; }
    }
}
