using UmaMusumeTrpg.Models.Base.Delete;

namespace UmaMusumeTrpg.Models.System.User.Delete;

public class DeleteResponse : BaseDeleteResponse
{
    public DeleteResponse(int id, DateTime? deleteTime) : base(id, deleteTime)
    {
    }
}