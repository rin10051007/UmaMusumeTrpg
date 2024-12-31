using Microsoft.EntityFrameworkCore;
using UmaMusumeTrpg.Entities;
using Thread = UmaMusumeTrpg.Entities.Thread;

namespace UmaMusumeTrpg;

public class UmaMusumeTrpgDbContext(DbContextOptions dbOptions) : DbContext(dbOptions)
{
    public DbSet<User> Users { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        _ = modelBuilder.Entity<User>(entity =>
        {
            _ = entity.HasKey(e => e.Id);
            _ = entity.Property(e => e.Id);
            _ = entity.Property(e => e.LoginId).HasMaxLength(64);
            _ = entity.Property(e => e.Name).HasMaxLength(64);
            _ = entity.Property(e => e.SysPermission);
            _ = entity.Property(e => e.UmaMusumeTrpgPermission);
            _ = entity.Property(e => e.Email).HasMaxLength(128);
            _ = entity.Property(e => e.Password).HasMaxLength(256);
            _ = entity.Property(e => e.Token).HasMaxLength(32);
            _ = entity.Property(e => e.CreationTime);
            _ = entity.Property(e => e.UpdateTime);
            _ = entity.Property(e => e.DeletingTime);
            _ = entity.Property(e => e.IsDeleted);

            _ = entity.HasMany(e => e.Threads)
                .WithOne(t => t.User)
                .HasForeignKey(t => t.CreatingUserId)
                .OnDelete(DeleteBehavior.Cascade);

            _ = entity.HasMany(e => e.Res)
                .WithOne(t => t.User)
                .HasForeignKey(t => t.CreatingUserId)
                .OnDelete(DeleteBehavior.Cascade);
        });

        _ = modelBuilder.Entity<Thread>(entity =>
        {
            _ = entity.HasKey(e => e.Id);
            _ = entity.Property(e => e.Id);
            _ = entity.Property(e => e.CreatingUserId);
            _ = entity.Property(e => e.Title).HasMaxLength(64);
            _ = entity.Property(e => e.ResCount);
            _ = entity.Property(e => e.Token).HasMaxLength(32);
            _ = entity.Property(e => e.CreationTime);
            _ = entity.Property(e => e.UpdateTime);
            _ = entity.Property(e => e.DeletingTime);
            _ = entity.Property(e => e.IsDeleted);

            _ = entity.HasMany(e => e.Res)
                .WithOne(t => t.Thread)
                .HasForeignKey(t => t.ThreadId)
                .OnDelete(DeleteBehavior.Cascade);
        });

        _ = modelBuilder.Entity<Res>(entity =>
        {
            _ = entity.HasKey(e => e.Id);
            _ = entity.Property(e => e.Id);
            _ = entity.Property(e => e.ThreadId);
            _ = entity.Property(e => e.CreatingUserId);
            _ = entity.Property(e => e.ThreadResNo);
            _ = entity.Property(e => e.Content).HasMaxLength(512);
            _ = entity.Property(e => e.CreationTime);
        });
    }
}