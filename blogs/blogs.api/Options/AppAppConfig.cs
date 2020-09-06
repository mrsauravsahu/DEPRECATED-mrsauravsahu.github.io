using System.ComponentModel.DataAnnotations;

namespace blogs.api.options
{
    public class AboutAppOptions {
        [Required]
        public string AppName { get; set; }

        [Required]
        public string Version { get; set; }

        [Required, EmailAddress]
        public string ContactEmail { get; set; }
    }
}