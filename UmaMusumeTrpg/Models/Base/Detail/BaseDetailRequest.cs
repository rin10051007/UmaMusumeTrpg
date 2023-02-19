namespace UmaMusumeTrpg.Models.Base.Detail
{
    public class BaseDetailRequest
    {
        public BaseDetailRequest(BaseDetailSearch serch)
        {
            Search = serch;
        }
        public BaseDetailSearch Search { get; set; }
    }
}
