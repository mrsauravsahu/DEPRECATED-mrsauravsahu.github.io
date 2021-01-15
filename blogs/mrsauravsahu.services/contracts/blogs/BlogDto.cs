using System;
using System.Collections.Generic;

namespace mrsauravsahu.services.contracts
{
    public class BlogDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Slug { get; set; }
        public DateTime CreatedAt { get; set; }
        public string FileUrl { get; set; }
        public IEnumerable<string> ImageUrls { get; set; }
    }
}