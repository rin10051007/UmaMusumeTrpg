namespace UmaMusumeTrpg.Models.User.NameList;

public class NameListItem(Entities.User user)
{
    public int Id { get; set; } = user.Id;
    public string Name { get; set; } = user.Name;
}