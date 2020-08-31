using System.Collections.Generic;
using System.Threading.Tasks;
using blogs.data.context;
using blogs.data.models;
using blogs.services.contracts;
using Microsoft.EntityFrameworkCore;

namespace blogs.services
{
      public class BlogsService : IBasicService<Blog>
    {
        private readonly BlogsContext blogsContext;

        public BlogsService(BlogsContext blogsContext)
        {
            this.blogsContext = blogsContext;
        }

        public async Task<PaginatedResult<List<Blog>>> GetAllAsync()
        {
            var totalCount = await blogsContext.Blogs.LongCountAsync();
            var blogs = await blogsContext.Blogs.ToListAsync();

            var result = new PaginatedResult<List<Blog>>
            {
                Data = blogs,
                Count = blogs.Count,
                TotalCount = totalCount
            };

            return result;
        }
    }
}
