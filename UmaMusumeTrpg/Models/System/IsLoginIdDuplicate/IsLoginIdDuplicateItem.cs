namespace UmaMusumeTrpg.Models.System.IsLoginIdDuplicate;

public class IsLoginIdDuplicateItem
{
    public IsLoginIdDuplicateItem(string loginId, int id = 0)
    {
        LoginId = loginId;
        Id = id;
    }

    public string LoginId { get; set; }
    public int Id { get; set; }
}