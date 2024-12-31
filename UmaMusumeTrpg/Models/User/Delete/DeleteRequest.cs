using UmaMusumeTrpg.Models.Base.Delete;

namespace UmaMusumeTrpg.Models.User.Delete;

public class DeleteRequest : BaseDeleteRequest
{
    public new DeleteItem Delete { get; set; }
}