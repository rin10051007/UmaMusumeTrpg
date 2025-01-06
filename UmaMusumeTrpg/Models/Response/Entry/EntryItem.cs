using System.ComponentModel.DataAnnotations;
using UmaMusumeTrpg.Models.Base.Entry;

namespace UmaMusumeTrpg.Models.Response.Entry;

public class EntryItem(int threadId, int creatingUserId, string content, string threadToken) : BaseEntryItem
{
    [Required] public int ThreadId { get; set; } = threadId;
    [Required] public int CreatingUserId { get; set; } = creatingUserId;
    [Required] public string Content { get; set; } = content;
    [Required] public string ThreadToken { get; set; } = threadToken;
}