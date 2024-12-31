using UmaMusumeTrpg.Models.Base.Delete;

namespace UmaMusumeTrpg.Models.User.Delete;

public class DeleteResponse(int id, DateTime? deleteTime) : BaseDeleteResponse(id, deleteTime);