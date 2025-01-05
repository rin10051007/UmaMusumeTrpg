using Microsoft.AspNetCore.Identity;
using UmaMusumeTrpg.Enums;

namespace UmaMusumeTrpg.Entities;

/// <summary>
///     管理者、利用者DB
/// </summary>
public class User : PasswordHasher<User>
{
    /// <summary>
    ///     ID
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    ///     LoginId
    /// </summary>
    public string LoginId { get; set; } = "";

    /// <summary>
    ///     名前
    /// </summary>
    public string Name { get; set; } = "";

    /// <summary>
    ///     管理者権限
    ///     None = 0
    ///     NoQualification = 1,
    ///     SysAdmin = 2
    /// </summary>
    public SysPermission SysPermission { get; set; } = SysPermission.None;

    /// <summary>
    ///     ウマ娘TRPG権限
    ///     None = 0
    ///     NoQualification = 1,
    ///     Player = 2,
    ///     GmPlayer = 3
    /// </summary>
    public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; } = UmaMusumeTrpgPermission.None;

    /// <summary>
    ///     メールアドレス
    /// </summary>
    public string Email { get; set; } = "";

    /// <summary>
    ///     作成スレッド数
    /// </summary>
    public int CreationThreadCount { get; set; }

    /// <summary>
    ///     総レス数
    /// </summary>
    public int TotalResCount { get; set; }

    /// <summary>
    ///     パスワード
    /// </summary>
    public string Password { get; set; } = "";

    /// <summary>
    ///     トークン
    /// </summary>
    public string Token { get; set; } = "";

    /// <summary>
    ///     作成日時
    /// </summary>
    public DateTime CreatingTime { get; set; } = DateTime.Now;

    /// <summary>
    ///     更新日時
    /// </summary>
    public DateTime UpdatingTime { get; set; } = DateTime.Now;

    /// <summary>
    ///     削除日時
    /// </summary>
    public DateTime? DeletingTime { get; set; }

    /// <summary>
    ///     削除フラグ
    /// </summary>
    public bool IsDeleted { get; set; }

    public virtual ICollection<Response> Responses { get; set; } = new List<Response>();

    public virtual ICollection<Thread> Threads { get; set; } = new List<Thread>();

    public void PasswordHash()
    {
        Password = HashPassword(this, Password);
    }

    public void PasswordHash(string password)
    {
        Password = HashPassword(this, password);
    }

    public bool VerifyHashedPassword(string password)
    {
        return PasswordVerificationResult.Failed !=
               VerifyHashedPassword(this, Password, password);
    }
}