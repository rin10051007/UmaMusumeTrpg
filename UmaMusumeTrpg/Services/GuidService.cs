using UmaMusumeTrpg.IServices;

namespace UmaMusumeTrpg.Services;

public class GuidService : IGuidService
{
    public string NewGuid()
    {
        return Guid.NewGuid().ToString("N");
    }
}