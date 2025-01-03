using System.ComponentModel.DataAnnotations;
using UmaMusumeTrpg.Models.Base.Entry;

namespace UmaMusumeTrpg.Models.Response.Entry;

public class EntryItem(int threadId, int creationUserId, string content) : BaseEntryItem
{
    [Required] public int ThreadId { get; set; } = threadId;
    [Required] public int CreationUserId { get; set; } = creationUserId;
    [Required] public string Content { get; set; } = content;
}