using UmaMusumeTrpg.Models.Base.Edit;

namespace UmaMusumeTrpg.Models.System.Edit;

public class EditResponse : BaseEditResponse
{
    public EditResponse(int id, string name, string token) : base(id, name, token)
    {
    }
}