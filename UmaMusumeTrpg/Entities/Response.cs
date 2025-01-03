namespace UmaMusumeTrpg.Entities;

/// <summary>
///     レスDB
/// </summary>
public class Response
{
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
    public int CreatingUserId { get; set; }

    /// <summary>
    ///     レスNo
    /// </summary>
    public int ThreadResNo { get; set; }

    /// <summary>
    ///     レス内容
    /// </summary>
    public string Content { get; set; } = "";

    /// <summary>
    ///     トークン
    /// </summary>
    public string Token { get; set; } = "";

    /// <summary>
    ///     作成日
    /// </summary>
    public DateTime CreationTime { get; set; } = DateTime.Now;

    public virtual User CreatingUser { get; set; } = new();

    public virtual Thread Thread { get; set; } = new();
}