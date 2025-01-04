using System.ComponentModel.DataAnnotations;
using UmaMusumeTrpg.Models.Base.Entry;

namespace UmaMusumeTrpg.Models.Thread.Entry;

public class EntryItem(int creatingUserId, string title) : BaseEntryItem
{
    [Required] public int CreatingUserId { get; set; } = creatingUserId;
    [Required] public string Title { get; set; } = title;
}