using System;

namespace blogs.data.models
{
    public class Link
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}