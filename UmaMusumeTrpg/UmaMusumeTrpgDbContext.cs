using Microsoft.EntityFrameworkCore;
using UmaMusumeTrpg.Entitys;

namespace UmaMusumeTrpg
{
    public class UmaMusumeTrpgDbContext : DbContext
    {
        public UmaMusumeTrpgDbContext(DbContextOptions DbOptions)
            : base(DbOptions)
        {
        }

        public DbSet<User> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            _ = modelBuilder.Entity<User>(entity =>
            {

                _ = entity.HasKey(e => e.ID);
                _ = entity.Property(e => e.ID);
                _ = entity.Property(e => e.LoginId);
                _ = entity.Property(e => e.Name);
                _ = entity.Property(e => e.SysPermission);
                _ = entity.Property(e => e.UmaMusumeTrpgPermission);
                _ = entity.Property(e => e.Email);
                _ = entity.Property(e => e.Password);
                _ = entity.Property(e => e.Token);
                _ = entity.Property(e => e.CreateTime);
                _ = entity.Property(e => e.UpdateTime);
                _ = entity.Property(e => e.DeleteTime);
                _ = entity.Property(e => e.IsDeleted);
            });
        }
    }
}
