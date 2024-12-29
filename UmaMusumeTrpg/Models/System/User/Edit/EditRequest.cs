using UmaMusumeTrpg.Models.Base.Edit;

namespace UmaMusumeTrpg.Models.System.User.Edit;

public class EditRequest(EditItem edit) : BaseEditRequest(edit)
{
    public new EditItem Edit { get; set; } = edit;
}