using System;
using System.Linq;
using System.Threading.Tasks;
using blogs.data.context;
using Microsoft.AspNetCore.Mvc;
using blogs.data.models;

namespace blogs.api.Controllers
{
    [Route("api/[controller]")]
    public class BlogsController : ControllerBase
    {
        private readonly BlogsContext blogsContext;

        public BlogsController(BlogsContext blogsContext)
        {
            this.blogsContext = blogsContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetBlogsAsync()
        {
            var blogs = blogsContext.Blogs.ToList();

            if (blogs.Count == 0)
            {
                blogsContext.Blogs.Add(new Blog
                {
                    Title = "First",
                    Description = "This is my first blog",
                    Slug = "first",
                    CreatedAt = DateTime.UtcNow,
                    File = Guid.NewGuid().ToString(),
                    Images = Enumerable.Range(0, 3).Select(p => Guid.NewGuid().ToString())
                });
                await blogsContext.SaveChangesAsync();
            }

            blogs = blogsContext.Blogs.ToList();
            return Ok(new
            {
                Data = blogs
            });
        }
    }
}