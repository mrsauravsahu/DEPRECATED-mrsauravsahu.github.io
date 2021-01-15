using System.Linq;
using System.Threading.Tasks;
using blogs.data.context;
using blogs.data.models;
using blogs.services;
using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;

namespace blogs.api.contracts
{
    public class Query
    {
        [UsePaging]
        [UseSorting]
        public IQueryable<Blog> GetBlogs([Service] BlogsContext dbContext) => dbContext.Blogs.OrderByDescending(p => p.CreatedAt);
        public IQueryable<Link> GetLinks([Service] BlogsContext dbContext) => dbContext.Links;
        public Task<Blog> GetBlogByIdAsync(BlogRouteParams input, [Service] BlogsService blogsService)
        => blogsService.GetByIdAsync(input.Id);

        public Task<int> BlogsCount([Service] BlogsContext dbContext) => dbContext.Blogs.CountAsync();        
    }
}