using Microsoft.AspNetCore.Identity;
using UmaMusumeTrpg.Enums;

namespace UmaMusumeTrpg.Entities;

public class User : PasswordHasher<User>
{
    /// <summary>
    ///     管理者、利用者DB
    /// </summary>
    public User()
    {
        Id = 0;
        LoginId = "";
        Name = "";
        SysPermission = SysPermission.None;
        UmaMusumeTrpgPermission = UmaMusumeTrpgPermission.None;
        Email = "";
        CreationThreadCount = 0;
        TotalResCount = 0;
        Password = "";
        Token = "";
        CreateTime = DateTime.Now;
        UpdateTime = DateTime.Now;
        DeleteTime = null;
        IsDeleted = false;
        Threads = new List<Thread>();
        Res = new List<Res>();
    }

    /// <summary>
    ///     ID
    /// </summary>
    public int Id { get; init; }

    /// <summary>
    ///     ログインID
    /// </summary>
    public string LoginId { get; set; }

    /// <summary>
    ///     名前
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    ///     管理者権限
    /// </summary>
    public SysPermission SysPermission { get; set; }

    /// <summary>
    ///     ウマ娘TRPG権限
    /// </summary>
    public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }

    /// <summary>
    ///     メールアドレス
    /// </summary>
    public string Email { get; set; }

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
    public string Password { get; set; }

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

    public ICollection<Thread> Threads { get; set; }

    public ICollection<Res> Res { get; set; }


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