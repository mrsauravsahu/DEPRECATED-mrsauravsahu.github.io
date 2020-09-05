namespace blogs.services.contracts
{
    public class CreateBlogDto
    {
        public string Title { get; set; }
        public string Slug { get; set; }
        public string Description { get; set; }
    }
}