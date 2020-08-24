using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using blogs.data.context;
using blogs.data.models;
using System;

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
            var links = blogsContext.Links.ToList();
            if (links.Count == 0)
            {
                blogsContext.Links.Add(new Link
                {
                    Title = "sample",
                    Description = "this is a sample link",
                    Url = "https://mrsauravsahu.github.io",
                    CreatedAt = DateTime.UtcNow
                });
                await blogsContext.SaveChangesAsync();
            }

            links = blogsContext.Links.ToList();
            return Ok(new
            {
                Data = links
            });
        }
    }

}