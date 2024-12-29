using UmaMusumeTrpg.Models.Base.Edit;

namespace UmaMusumeTrpg.Models.System.User.Edit;

public class EditResponse : BaseEditResponse
{
    public EditResponse(int id, string token) : base(id, token)
    {
    }
}