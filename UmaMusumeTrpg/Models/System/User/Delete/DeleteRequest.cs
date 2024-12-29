using UmaMusumeTrpg.Models.Base.Delete;

namespace UmaMusumeTrpg.Models.System.User.Delete;

public class DeleteRequest : BaseDeleteRequest
{
    public new DeleteItem Delete { get; set; }
}