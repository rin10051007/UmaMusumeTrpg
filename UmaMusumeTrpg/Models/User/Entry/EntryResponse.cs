using UmaMusumeTrpg.Models.Base.Entry;

namespace UmaMusumeTrpg.Models.User.Entry;

public class EntryResponse(int id, string token) : BaseEntryResponse(id, token);