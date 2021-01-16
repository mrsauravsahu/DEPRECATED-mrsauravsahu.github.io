using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mrsauravsahu.api.dto;
using mrsauravsahu.services;
using mrsauravsahu.services.contracts;
using System.Collections.Generic;
using mrsauravsahu.data.models;
using Swashbuckle.AspNetCore.Annotations;
using mrsauravsahu.api.contracts;
using Microsoft.AspNetCore.Http;
using System.IO;
using Sieve.Models;

namespace mrsauravsahu.api.Controllers
{
    [Route("api/[controller]")]
    public class BlogsController : ControllerBase
    {
        private readonly BlogsService blogsService;

        public BlogsController(BlogsService blogsService)
        {
            this.blogsService = blogsService;
        }

        [HttpPut("{Id:int}/file")]
        [SwaggerResponse(200, "Update blog file for blog")]
        public async Task<IActionResult> SetBlogFileForBlogAsync(
            [FromRoute] BlogRouteParams routeParams,
            IFormFile file
        )
        {
            var stream = new MemoryStream();
            await file.CopyToAsync(stream);

            await blogsService.SetFileForBlogAsync(routeParams.Id, stream);

            return Ok();
        }

        [HttpGet("{Id:int}/file")]
        [SwaggerResponse(200, "Retrieved blog file")]
        public async Task<IActionResult> GetBlogFileForBlogAsync(
            [FromRoute] BlogRouteParams routeParams
        )
        {
            var stream = await blogsService.GetFileForBlogAsync(routeParams.Id);

            return File(stream, "application/octet-stream", $"blog-{routeParams.Id}.md");
        }
    }
}