namespace UmaMusumeTrpg.Models.Base.Detail;

public class BaseDetailRequest(BaseDetailSelect select)
{
    public BaseDetailSelect Select { get; set; } = select;
}