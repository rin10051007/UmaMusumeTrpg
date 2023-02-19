namespace UmaMusumeTrpg.Models.Base.Edit
{
    public class BaseEditRequest
    {
        public BaseEditRequest(BaseEditItem edit)
        {
            Edit = edit;
        }
        public BaseEditItem Edit { get; set; }
    }
}
