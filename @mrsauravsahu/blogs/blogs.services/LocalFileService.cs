// using System.IO;
using System.IO.Abstractions;
using System.Threading.Tasks;
using blogs.services.contracts;

using Blob = System.IO.MemoryStream;

namespace blogs.services
{
    public class LocalFileService : IBlobService
    {
        private readonly IFileSystem fileSystem;
        private readonly string basePath;

        public LocalFileService(IFileSystem fileSystem, string basePath)
        {
            this.fileSystem = fileSystem;
            this.basePath = basePath;
        }

        public Task<Blob> GetBlobAsync(string container, string name)
        {
            throw new System.NotImplementedException();
        }

        public async Task SaveBlobAsync(string container, string name, Blob stream)
        {
            await Task.Run(() =>
            {
                var containerPath = fileSystem.Path.Combine(new string[] { basePath, container });

                var directoryExists = fileSystem.Directory.Exists(containerPath);
                if (!directoryExists) fileSystem.Directory.CreateDirectory(containerPath);

                var filePath = fileSystem.Path.Combine(new string[] { basePath, container, name });
                var fileStream = fileSystem.File.Create(filePath);

                fileSystem.File.WriteAllBytes(filePath, stream.GetBuffer());
            });
        }
    }
}