namespace UmaMusumeTrpg.Models.Base.Edit;

public class BaseEditRequest(BaseEditItem edit)
{
    public BaseEditItem Edit { get; set; } = edit;
}