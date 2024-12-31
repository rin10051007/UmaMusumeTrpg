using UmaMusumeTrpg.Models.Base.Edit;

namespace UmaMusumeTrpg.Models.User.Edit;

public class EditRequest(EditItem edit) : BaseEditRequest(edit)
{
    public new EditItem Edit { get; set; } = edit;
}