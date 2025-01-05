namespace UmaMusumeTrpg.Entities;

/// <summary>
///     スレッドDB
/// </summary>
public class Thread
{
    /// <summary>
    ///     ID
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    ///     作成者ID
    /// </summary>
    public int CreatingUserId { get; set; }

    /// <summary>
    ///     スレッドタイトル
    /// </summary>
    public string Title { get; set; } = "";

    /// <summary>
    ///     レス数
    /// </summary>
    public int ResCount { get; set; }

    /// <summary>
    ///     トークン
    /// </summary>
    public string Token { get; set; } = "";

    /// <summary>
    ///     作成日
    /// </summary>
    public DateTime CreatingTime { get; set; } = DateTime.Now;

    /// <summary>
    ///     更新日
    /// </summary>
    public DateTime UpdatingTime { get; set; } = DateTime.Now;

    /// <summary>
    ///     削除日
    /// </summary>
    public DateTime? DeletingTime { get; set; }

    /// <summary>
    ///     削除フラグ
    /// </summary>
    public bool IsDeleted { get; set; }

    public virtual User CreatingUser { get; set; }

    public virtual ICollection<Response> Responses { get; set; } = new List<Response>();
}