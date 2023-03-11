using UmaMusumeTrpg.Models.Base.Edit;

namespace UmaMusumeTrpg.Models.System.Edit
{
    public class EditRequest : BaseEditRequest
    {
        public EditRequest(EditItem edit) : base(edit)
        {
            Edit = edit;
        }
        public new EditItem Edit { get; set; }
    }
}
