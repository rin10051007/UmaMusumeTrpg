namespace UmaMusumeTrpg.Models.Base.Detail
{
    public class BaseDetailRequest
    {
        public BaseDetailRequest(BaseDetailSerch serch)
        {
            Seach = serch;
        }
        public BaseDetailSerch Seach { get; set; }
    }
}
