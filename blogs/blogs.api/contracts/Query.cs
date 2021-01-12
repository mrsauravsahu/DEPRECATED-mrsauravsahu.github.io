using System.Linq;
using blogs.data.context;
using blogs.data.models;
using HotChocolate;

namespace blogs.api.contracts
{
    public class Query
    {
        public IQueryable<Blog> GetBlogs([Service] BlogsContext dbContext) => dbContext.Blogs;
        public IQueryable<Link> GetLinks([Service] BlogsContext dbContext) => dbContext.Links;
    }
}