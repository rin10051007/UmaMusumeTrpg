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
            modelBuilder.Entity<User>(entity =>
            {

                entity.HasKey(e => e.ID);
                entity.Property(e => e.ID);
                entity.Property(e => e.Name);
                entity.Property(e => e.SysPermission);
                entity.Property(e => e.UmaMusumeTrpgPermission);
                entity.Property(e => e.Email);
                entity.Property(e => e.Password);
                entity.Property(e => e.Token);
                entity.Property(e => e.CreateTime);
                entity.Property(e => e.UpdateTime);
                entity.Property(e => e.DeleteTime);
                entity.Property(e => e.IsDeleted);
            });
        }
    }
}
