using blogs.data.models;
using Microsoft.EntityFrameworkCore;

namespace blogs.data.context
{
    public class BlogsContext : DbContext
    {
        public BlogsContext(DbContextOptions<BlogsContext> options) : base(options) { }

        public DbSet<Link> Links { get; set; }
        public DbSet<Blog> Blogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Blog>()
                .Property<string>("images")
                .HasField("images")
                .HasColumnName("Images");
        }
    }
}