using UmaMusumeTrpg.Models.Base.Delete;

namespace UmaMusumeTrpg.Models.User.Delete;

public class DeleteResponse(int id, DateTime? DeletingTime) : BaseDeleteResponse(id, DeletingTime);