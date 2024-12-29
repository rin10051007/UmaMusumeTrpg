namespace UmaMusumeTrpg.Models.System.User.IsLoginIdDuplicate;

public class IsLoginIdDuplicateItem(string loginId, int id = 0)
{
    public string LoginId { get; set; } = loginId;
    public int Id { get; set; } = id;
}