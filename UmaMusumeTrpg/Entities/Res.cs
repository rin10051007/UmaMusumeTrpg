namespace UmaMusumeTrpg.Entities;

public class Res
{
    /// <summary>
    ///     レスDB
    /// </summary>
    public Res()
    {
        Id = 0;
        ThreadId = 0;
        CreateUserId = 0;
        CreateTime = DateTime.Now;
        ThreadId = 0;
        Content = "";
        User = new User();
        Thread = new Thread();
    }

    /// <summary>
    ///     ID
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    ///     スレッドID
    /// </summary>
    public int ThreadId { get; set; }

    /// <summary>
    ///     作成者ID
    /// </summary>
    public int CreateUserId { get; set; }

    /// <summary>
    ///     作成日
    /// </summary>
    public DateTime CreateTime { get; set; }

    /// <summary>
    ///     レス数
    /// </summary>
    public int ThreadResNo { get; set; }

    /// <summary>
    ///     コンテンツ
    /// </summary>
    public string Content { get; set; }

    public User User { get; set; }
    public Thread Thread { get; set; }
}