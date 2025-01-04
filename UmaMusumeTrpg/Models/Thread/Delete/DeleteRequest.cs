using UmaMusumeTrpg.Models.Base.Delete;

namespace UmaMusumeTrpg.Models.Thread.Delete;

public class DeleteRequest : BaseDeleteRequest
{
    public new DeleteItem Delete { get; set; }
}