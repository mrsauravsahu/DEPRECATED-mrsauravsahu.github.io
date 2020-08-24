using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using blogs.data.context;
using blogs.data.models;
using System;
using Microsoft.EntityFrameworkCore;

namespace blogs.api.Controllers
{
    [Route("api/[controller]")]
    public class LinksController : ControllerBase
    {
        private readonly BlogsContext blogsContext;

        public LinksController(BlogsContext blogsContext)
        {
            this.blogsContext = blogsContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetLinksAsync()
        {
            var links = await blogsContext.Links.ToListAsync();

            return Ok(new
            {
                Data = links
            });
        }
    }

}