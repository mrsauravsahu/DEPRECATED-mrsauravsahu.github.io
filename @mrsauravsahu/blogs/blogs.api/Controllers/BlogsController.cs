using System;
using System.Linq;
using System.Threading.Tasks;
using blogs.data.context;
using Microsoft.AspNetCore.Mvc;
using blogs.data.models;
using Microsoft.EntityFrameworkCore;

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
            var blogs = await blogsContext.Blogs.ToListAsync();

            return Ok(new
            {
                Data = blogs
            });
        }
    }
}