using System.Collections.Generic;
using System.Threading.Tasks;
using mrsauravsahu.data.context;
using mrsauravsahu.data.models;
using mrsauravsahu.services.contracts;
using Microsoft.EntityFrameworkCore;
using Sieve.Models;

namespace mrsauravsahu.services
{
    public class LinksService: IBasicService<Link>
    {
        private readonly BlogsContext blogsContext;

        public LinksService(BlogsContext blogsContext)
        {
            this.blogsContext = blogsContext;
        }

        // TODO: Remove null default from sieve
        // should be implemented
        public async Task<PaginatedResult<List<Link>>> GetAllAsync(SieveModel sieve = null)
        {
            var totalCount = await blogsContext.Links.LongCountAsync();
            var links = await blogsContext.Links.ToListAsync();

            var result = new PaginatedResult<List<Link>>
            {
                Data = links,
                Count = links.Count,
                TotalCount = totalCount
            };

            return result;
        }
    }
}