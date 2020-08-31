using System.Collections.Generic;
using System.Threading.Tasks;
using blogs.data.context;
using blogs.data.models;
using blogs.services.contracts;
using Microsoft.EntityFrameworkCore;

namespace blogs.services
{
    public class LinksService: IBasicService<Link>
    {
        private readonly BlogsContext blogsContext;

        public LinksService(BlogsContext blogsContext)
        {
            this.blogsContext = blogsContext;
        }

        public async Task<PaginatedResult<List<Link>>> GetAllAsync()
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