using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using blogs.services;

namespace blogs.api.Controllers
{
    [Route("api/[controller]")]
    public class BlogsController : ControllerBase
    {
        private readonly BlogsService blogsService;

        public BlogsController(BlogsService blogsService)
        {
            this.blogsService = blogsService;
        }

        [HttpGet]
        public async Task<IActionResult> GetBlogsAsync()
        {
            var allblogsResult = await blogsService.GetAllAsync();

            return Ok(allblogsResult);
        }
    }
}