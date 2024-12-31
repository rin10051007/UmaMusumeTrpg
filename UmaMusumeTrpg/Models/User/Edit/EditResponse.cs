using UmaMusumeTrpg.Models.Base.Edit;

namespace UmaMusumeTrpg.Models.User.Edit;

public class EditResponse(int id, string token) : BaseEditResponse(id, token);