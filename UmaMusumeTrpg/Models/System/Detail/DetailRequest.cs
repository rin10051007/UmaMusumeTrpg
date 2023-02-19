using UmaMusumeTrpg.Models.Base.Detail;

namespace UmaMusumeTrpg.Models.System.Detail
{
    public class DetailRequest : BaseDetailRequest
    {
        public DetailRequest(DetailSearch search) : base(search)
        {
            Search = search;
        }
        public DetailSearch Search { get; set; }
    }
}
