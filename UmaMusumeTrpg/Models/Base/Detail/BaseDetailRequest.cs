namespace UmaMusumeTrpg.Models.Base.Detail;

public class BaseDetailRequest
{
    public BaseDetailRequest(BaseDetailSelect serch)
    {
        Select = serch;
    }

    public BaseDetailSelect Select { get; set; }
}