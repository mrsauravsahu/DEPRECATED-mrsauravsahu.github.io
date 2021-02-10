using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;
using mrsauravsahu.data.context;
using mrsauravsahu.data.models;
using mrsauravsahu.services.contracts;
using Microsoft.EntityFrameworkCore;
using Sieve.Models;
using Sieve.Services;

namespace mrsauravsahu.services
{
    public class BlogsService : IBasicService<Blog>
    {
        private readonly BlogsContext blogsContext;
        private readonly LocalFileService localFileService;
        private readonly SieveProcessor sieveProcessor;

        public BlogsService(
            BlogsContext blogsContext,
            LocalFileService localFileService,
            SieveProcessor sieveProcessor)
        {
            this.blogsContext = blogsContext;
            this.localFileService = localFileService;
            this.sieveProcessor = sieveProcessor;
        }

        public async Task<PaginatedResult<List<Blog>>> GetAllAsync(SieveModel sieve)
        {
            var totalCount = await blogsContext.Blogs.LongCountAsync();
            var allBlogsQuery = blogsContext.Blogs.AsQueryable();
            var blogs = await sieveProcessor.Apply(sieve, allBlogsQuery).ToListAsync();

            // Updating wordCount for testing
            // foreach (var b in blogs)
            // {
            //     var blogFile = await localFileService.GetBlobAsync(b.ContainerBasePath, b.File);
            //     blogFile.Seek(0, SeekOrigin.Begin);
            //     b.WordCount = await LocalFileService.GetWordCountAsync(blogFile);

            //     var approxTimeToRead = TimeSpan.FromMinutes((int)(b.WordCount / 225));
            //     b.ApproxTimeToRead = XmlConvert.ToString(approxTimeToRead);
            // }

            await blogsContext.SaveChangesAsync();

            var result = new PaginatedResult<List<Blog>>
            {
                Data = blogs,
                Count = blogs.Count,
                TotalCount = totalCount
            };

            return result;
        }

        public async Task<BlogDto> AddBlogAsync(CreateBlogDto blog)
        {
            var approxTimeToRead = TimeSpan.FromMinutes(0);
            

            // TODO: Update this with an AutoMapper or similar mapping library
            var result = blogsContext.Blogs.Add(new Blog
            {
                Title = blog.Title,
                Description = blog.Description,
                Slug = blog.Slug,
                ApproxTimeToRead = XmlConvert.ToString(approxTimeToRead),
                File = "content.md",
                CreatedAt = DateTime.UtcNow,
            });


            await blogsContext.SaveChangesAsync();
            var addedBlog = result.Entity;
            await localFileService.CreateBlobAsync(addedBlog.ContainerBasePath, addedBlog.File);

            var response = new BlogDto
            {
                Id = addedBlog.Id,
                Title = addedBlog.Title,
                Description = addedBlog.Description,
                Slug = addedBlog.Slug,
                FileUrl = addedBlog.File, // TODO: Convert this to a URL to file download API
                ImageUrls = addedBlog.Images, // TODO: -do-
                CreatedAt = addedBlog.CreatedAt
            };

            return response;
        }

        public async Task<Blog> GetByIdAsync(int id)
        {
            var blog = await blogsContext.Blogs.FindAsync(id);
            return blog;
        }

        public async Task SetFileForBlogAsync(int id, MemoryStream stream)
        {
            var blog = await blogsContext.Blogs.FindAsync(id);
            
            blog.File = "content.md";
            blog.WordCount = await LocalFileService.GetWordCountAsync(stream);

            var approxTimeToRead = TimeSpan.FromMinutes((int)(blog.WordCount / 225));
            blog.ApproxTimeToRead = XmlConvert.ToString(approxTimeToRead);

            await blogsContext.SaveChangesAsync();
            await localFileService.SaveBlobAsync(blog.ContainerBasePath, "content.md", stream);
        }

        public async Task<MemoryStream> GetFileForBlogAsync(int id)
        {
            var blog = await blogsContext.Blogs.FindAsync(id);
            var blogFile = await localFileService.GetBlobAsync(blog.ContainerBasePath, blog.File);
            blogFile.Seek(0, SeekOrigin.Begin);
            return blogFile;
        }
    }
}
