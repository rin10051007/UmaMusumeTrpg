using UmaMusumeTrpg.Models.Base.Detail;

namespace UmaMusumeTrpg.Models.System.Detail;

public class DetailRequest : BaseDetailRequest
{
    public DetailRequest(DetailSelect select) : base(select)
    {
        Select = select;
    }

    public new DetailSelect Select { get; set; }
}