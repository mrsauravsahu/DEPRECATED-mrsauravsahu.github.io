using blogs.data.models;
using Microsoft.EntityFrameworkCore;

namespace blogs.data.context
{
    public class BlogsContext : DbContext
    {
        public BlogsContext(DbContextOptions<BlogsContext> options) : base(options) { }

        public DbSet<Link> Links { get; set; }
    }
}