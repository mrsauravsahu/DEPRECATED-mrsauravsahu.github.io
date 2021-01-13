using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using blogs.api.dto;
using blogs.services;
using blogs.services.contracts;
using System.Collections.Generic;
using blogs.data.models;
using Swashbuckle.AspNetCore.Annotations;
using blogs.api.contracts;
using Microsoft.AspNetCore.Http;
using System.IO;
using Sieve.Models;

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
        [SwaggerResponse(200, "Retrieved all blogs", typeof(PaginatedResult<List<Blog>>))]
        public async Task<IActionResult> GetBlogsAsync(
            SieveModel sieve
        )
        {
            var allblogsResult = await blogsService.GetAllAsync(sieve);

            return Ok(allblogsResult);
        }

        [HttpPost]
        [SwaggerResponse(201, "Added a new blog", typeof(Envelope<BlogDto>))]
        public async Task<IActionResult> AddBlogAsync([FromBody] CreateBlogDto dto)
        {
            var blog = await blogsService.AddBlogAsync(dto);
            return CreatedAtRoute(new { }, new Envelope<BlogDto>(blog));
        }

        [HttpGet("{Id:int}")]
        [SwaggerResponse(200, "Retrieved all blogs", typeof(Envelope<Blog>))]
        public async Task<IActionResult> GetBlogByIdAsync(
            [FromRoute] BlogRouteParams routeParams
        )
        {
            var blogResult = await blogsService.GetByIdAsync(routeParams.Id);

            return Ok(new Envelope<Blog>(blogResult));
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