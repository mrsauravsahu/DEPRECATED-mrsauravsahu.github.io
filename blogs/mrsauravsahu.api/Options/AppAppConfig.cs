using System.ComponentModel.DataAnnotations;

namespace mrsauravsahu.api.options
{
    public class AboutAppOptions
    {
        [Required]
        public string AppName { get; set; } = default!;

        [Required]
        public string Version { get; set; } = default!;

        [Required, EmailAddress]
        public string ContactEmail { get; set; } = default!;
    }
}