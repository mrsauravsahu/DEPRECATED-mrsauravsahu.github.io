namespace mrsauravsahu.services.contracts
{
    public class CreateBlogDto
    {
        public string Title { get; set; } = default!;
        public string Slug { get; set; } = default!;
        public string? Description { get; set; }
    }
}