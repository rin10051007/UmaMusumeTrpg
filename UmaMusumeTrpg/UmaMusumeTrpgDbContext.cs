using Microsoft.EntityFrameworkCore;
using UmaMusumeTrpg.Entities;
using UmaMusumeTrpg.Enums;
using Thread = UmaMusumeTrpg.Entities.Thread;

namespace UmaMusumeTrpg;

public class UmaMusumeTrpgDbContext(DbContextOptions dbOptions) : DbContext(dbOptions)
{
    public virtual DbSet<User> Users { get; set; }
    public virtual DbSet<Thread> Threads { get; set; }
    public virtual DbSet<Response> Responses { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable(tb => tb.HasComment("管理者、利用者DB"));
            entity.HasKey(e => e.Id).HasName("UsersIdD");
            entity.Property(e => e.Id).HasComment("ID");
            entity.Property(e => e.LoginId).IsRequired().HasMaxLength(64).HasComment("LoginId");
            entity.HasIndex(e => e.LoginId, "Users_LoginId_key").IsUnique();
            entity.Property(e => e.Name).IsRequired().HasMaxLength(64).HasComment("名前");
            entity.Property(e => e.SysPermission).HasDefaultValue(SysPermission.None)
                .HasComment("管理者権限\r\nNone = 0\r\nNoQualification = 1,\r\nSysAdmin = 2");
            entity.Property(e => e.UmaMusumeTrpgPermission).HasDefaultValue(UmaMusumeTrpgPermission.None)
                .HasComment("ウマ娘TRPG権限\r\nNone = 0\r\nNoQualification = 1,\r\nPlayer = 2,\r\nGmPlayer = 3");
            entity.Property(e => e.Email).IsRequired().HasMaxLength(128).HasComment("メールアドレス");
            entity.Property(e => e.CreationThreadCount).HasDefaultValue(0).HasComment("作成スレッド数");
            entity.Property(e => e.TotalResCount).HasDefaultValue(0).HasComment("総レス数");
            entity.Property(e => e.Password).IsRequired().HasMaxLength(256).HasComment("パスワード");
            entity.Property(e => e.Token).IsRequired().HasMaxLength(32).HasComment("トークン");
            entity.Property(e => e.CreatingTime).HasDefaultValueSql("CURRENT_TIMESTAMP").HasComment("作成日時");
            entity.Property(e => e.UpdatingTime).HasDefaultValueSql("CURRENT_TIMESTAMP").HasComment("更新日時");
            entity.Property(e => e.DeletingTime).HasComment("削除日時");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false).HasComment("削除フラグ");
        });

        modelBuilder.Entity<Thread>(entity =>
        {
            entity.ToTable(tb => tb.HasComment("スレッドDB"));
            entity.HasKey(e => e.Id).HasName("ThreadsId");
            entity.Property(e => e.Id).HasComment("ID");
            entity.Property(e => e.CreatingUserId).HasComment("作成者ID");
            entity.Property(e => e.Title).IsRequired().HasMaxLength(64).HasComment("スレッドタイトル");
            entity.Property(e => e.ResCount).HasDefaultValue(0).HasComment("レス数");
            entity.Property(e => e.IsActive).HasDefaultValue(true).HasComment("レスがアクティブか");
            entity.Property(e => e.Token).IsRequired().HasMaxLength(32).HasComment("トークン");
            entity.Property(e => e.CreatingTime).HasDefaultValueSql("CURRENT_TIMESTAMP").HasComment("作成日");
            entity.Property(e => e.UpdatingTime).HasDefaultValueSql("CURRENT_TIMESTAMP").HasComment("更新日");
            entity.Property(e => e.DeletingTime).HasComment("削除日");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false).HasComment("削除フラグ");

            entity.HasOne(d => d.CreatingUser).WithMany(p => p.Threads).HasForeignKey(d => d.CreatingUserId)
                .OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("Threads_CreatingUserId_fkey");
        });

        modelBuilder.Entity<Response>(entity =>
        {
            entity.ToTable(tb => tb.HasComment("レスDB"));
            entity.HasKey(e => e.Id).HasName("ResponsesId");


            entity.Property(e => e.Id).HasComment("ID");
            entity.Property(e => e.ThreadId).HasComment("スレッドID");
            entity.Property(e => e.CreatingUserId).HasComment("作成者ID");
            entity.Property(e => e.ThreadResNo).HasComment("レスNo");
            entity.Property(e => e.Content).IsRequired().HasMaxLength(512).HasComment("レス内容");
            entity.Property(e => e.Token).IsRequired().HasMaxLength(32).HasComment("トークン");
            entity.Property(e => e.CreatingTime).HasDefaultValueSql("CURRENT_TIMESTAMP").HasComment("作成日");

            entity.HasOne(d => d.CreatingUser).WithMany(p => p.Responses).HasForeignKey(d => d.CreatingUserId)
                .OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("Responses_CreatingUserId_fkey");

            entity.HasOne(d => d.Thread).WithMany(p => p.Responses).HasForeignKey(d => d.ThreadId)
                .OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("Responses_ThreadId_fkey");
        });
    }
}