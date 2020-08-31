using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using blogs.services;

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
        public async Task<IActionResult> GetLinksAsync()
        {
            var paginatedLinks = await linksService.GetAllAsync();

            return Ok(paginatedLinks);
        }
    }

}