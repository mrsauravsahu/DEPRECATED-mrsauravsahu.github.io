using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using blogs.services;
using blogs.services.contracts;
using System.Collections.Generic;
using blogs.data.models;

namespace blogs.api.Controllers
{
    [Route("api/[controller]")]
    public class LinksController : ControllerBase
    {
        private readonly LinksService linksService;

        public LinksController(LinksService linksService)
        {
            this.linksService = linksService;
        }

        [HttpGet]
        [ProducesDefaultResponseType(typeof(PaginatedResult<List<Link>>))]
        public async Task<IActionResult> GetLinksAsync()
        {
            var paginatedLinks = await linksService.GetAllAsync();

            return Ok(paginatedLinks);
        }
    }

}