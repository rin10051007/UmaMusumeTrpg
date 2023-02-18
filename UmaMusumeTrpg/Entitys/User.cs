using UmaMusumeTrpg.Enum;

namespace UmaMusumeTrpg.Entitys
{
    public class User
    {
        /// <summary>
        /// 管理者、利用者DB
        /// </summary>
        public User()
        {
            Name = "";
            Email = "";
            Password = "";
        }
        /// <summary>
        /// ID
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// 名前
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 管理者権限
        /// </summary>
        public SysPermission SysPermission { get; set; }
        /// <summary>
        /// ウマ娘TRPG権限
        /// </summary>
        public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
        /// <summary>
        /// メールアドレス
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// パスワード
        /// </summary>
        public string Password { get; set; }
        /// <summary>
        /// トークン
        /// </summary>
        public string Token { get; set; }
        /// <summary>
        /// 作成日時
        /// </summary>
        public DateTime CreateTime { get; set; }
        /// <summary>
        /// 更新日時
        /// </summary>
        public DateTime UpdateTime { get; set; }
        /// <summary>
        /// 削除日時
        /// </summary>
        public DateTime? DeleteTime { get; set; }
        /// <summary>
        /// 削除フラグ
        /// </summary>
        public bool IsDeleted { get; set; }
    }
}
