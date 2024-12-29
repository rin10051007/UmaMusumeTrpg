using Microsoft.EntityFrameworkCore;
using UmaMusumeTrpg.Entitys;

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
            _ = entity.Property(e => e.CreateTime);
            _ = entity.Property(e => e.UpdateTime);
            _ = entity.Property(e => e.DeleteTime);
            _ = entity.Property(e => e.IsDeleted);
        });
    }
}