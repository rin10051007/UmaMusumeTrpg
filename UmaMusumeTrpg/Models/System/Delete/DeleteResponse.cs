using UmaMusumeTrpg.Models.Base.Delete;

namespace UmaMusumeTrpg.Models.System.Delete;

public class DeleteResponse : BaseDeleteResponse
{
    public DeleteResponse(int Id, DateTime? deleteTime) : base(Id, deleteTime)
    {
    }
}