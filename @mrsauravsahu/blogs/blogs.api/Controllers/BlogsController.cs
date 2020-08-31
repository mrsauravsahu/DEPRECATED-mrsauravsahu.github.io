using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using blogs.services;
using blogs.services.contracts;
using System.Collections.Generic;
using blogs.data.models;

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
        [ProducesDefaultResponseType(typeof(PaginatedResult<List<Blog>>))]
        public async Task<IActionResult> GetBlogsAsync()
        {
            var allblogsResult = await blogsService.GetAllAsync();

            return Ok(allblogsResult);
        }
    }
}