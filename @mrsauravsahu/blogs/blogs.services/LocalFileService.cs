using System.IO;
using System.IO.Abstractions;
using System.Threading.Tasks;
using blogs.services.contracts;
using blogs.services.options;
using Microsoft.Extensions.Options;
using Blob = System.IO.MemoryStream;

namespace blogs.services
{
    public class LocalFileService : IBlobService
    {
        private readonly IFileSystem fileSystem;
        private readonly LocalFileServiceOptions config;

        public LocalFileService(IFileSystem fileSystem, IOptions<LocalFileServiceOptions> options)
        {
            this.fileSystem = fileSystem;
            this.config = options.Value;
        }

        public Task<Blob> GetBlobAsync(string container, string name)
        {
            throw new System.NotImplementedException();
        }

        public async Task SaveBlobAsync(string container, string name, Blob stream)
        {
            await Task.Run(() =>
            {
                var containerPath = fileSystem.Path.Combine(new[] { config.BasePath, container });

                var directoryExists = fileSystem.Directory.Exists(containerPath);
                if (!directoryExists) fileSystem.Directory.CreateDirectory(containerPath);

                var filePath = fileSystem.Path.Combine(new[] { config.BasePath, container, name });
                using (var fileStream = fileSystem.FileStream.Create(filePath, FileMode.Create, FileAccess.Write))
                {
                    stream.WriteTo(fileStream);
                }

            });
        }
    }
}