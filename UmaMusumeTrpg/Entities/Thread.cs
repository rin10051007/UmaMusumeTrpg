namespace UmaMusumeTrpg.Entities;

public class Thread
{
    /// <summary>
    ///     スレッドDB
    /// </summary>
    public Thread()
    {
        Id = 0;
        CreateUserId = 0;
        Title = "";
        ResCount = 0;
        Token = "";
        CreateTime = DateTime.Now;
        UpdateTime = DateTime.Now;
        DeleteTime = null;
        IsDeleted = false;
        User = new User();
        Res = new List<Res>();
    }

    /// <summary>
    ///     ID
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    ///     作成者ID
    /// </summary>
    public int CreateUserId { get; set; }

    /// <summary>
    ///     スレッドタイトル
    /// </summary>
    public string Title { get; set; }

    /// <summary>
    ///     レス数
    /// </summary>
    public int ResCount { get; set; }

    /// <summary>
    ///     トークン
    /// </summary>
    public string Token { get; set; }

    /// <summary>
    ///     作成日時
    /// </summary>
    public DateTime CreateTime { get; init; }

    /// <summary>
    ///     更新日時
    /// </summary>
    public DateTime UpdateTime { get; set; }

    /// <summary>
    ///     削除日時
    /// </summary>
    public DateTime? DeleteTime { get; set; }

    /// <summary>
    ///     削除フラグ
    /// </summary>
    public bool IsDeleted { get; set; }

    public User User { get; set; }

    public ICollection<Res> Res { get; set; }
}