using mrsauravsahu.data.models;
using Microsoft.EntityFrameworkCore;

namespace mrsauravsahu.data.context
{
    public class BlogsContext : DbContext
    {
        public BlogsContext(DbContextOptions<BlogsContext> options) : base(options) { }

        public DbSet<Link> Links { get; set; } = default!;
        public DbSet<Blog> Blogs { get; set; } = default!;

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