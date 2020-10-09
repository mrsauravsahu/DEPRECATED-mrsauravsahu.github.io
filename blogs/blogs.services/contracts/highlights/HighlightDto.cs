namespace blogs.services.contracts
{
    public class HighlightDto
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public HighlightType Type { get; set; }
    }
}