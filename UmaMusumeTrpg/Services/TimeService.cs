using UmaMusumeTrpg.IServices;

namespace UmaMusumeTrpg.Services;

public class TimeService : ITimeService
{
    private readonly DateTime _now = DateTime.Now;

    public DateTime NowTime()
    {
        return _now;
    }
}