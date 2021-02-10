using System;
using System.IO;
using System.IO.Abstractions;
using System.Threading.Tasks;
using mrsauravsahu.services.contracts;
using mrsauravsahu.services.options;
using Microsoft.Extensions.Options;
using Blob = System.IO.MemoryStream;

namespace mrsauravsahu.services
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

        public async Task CreateBlobAsync(string container, string name)
        {
            await Task.Run(() =>
            {
                var containerPath = fileSystem.Path.Combine(new[] { config.BasePath, container });

                var directoryExists = fileSystem.Directory.Exists(containerPath);
                if (!directoryExists) fileSystem.Directory.CreateDirectory(containerPath);

                var filePath = fileSystem.Path.Combine(new[] { containerPath, name });
                if (!File.Exists(filePath)) File.Create(filePath);
                return;
            });
        }

        public async Task<Blob> GetBlobAsync(string container, string name)
        {
            var containerPath = fileSystem.Path.Combine(new[] { config.BasePath, container });

            var filePath = fileSystem.Path.Combine(new[] { containerPath, name });

            var stream = new Blob();
            using (var fileStream = fileSystem.File.OpenRead(filePath))
            {
                await fileStream.CopyToAsync(stream);
            }

            return stream;
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

        public async static Task<long> GetWordCountAsync(Blob stream)
        {
            var copiedStream = new Blob();
            stream.Seek(0, SeekOrigin.Begin);
            await stream.CopyToAsync(copiedStream);
            // Move to the starting of the file
            copiedStream.Seek(0, SeekOrigin.Begin);

            using (var reader = new StreamReader(copiedStream))
            {
                var fileString = await reader.ReadToEndAsync();
                var wordCount = fileString.Split(new char[] { ' ', '\n', }).LongLength;
                return wordCount;
            }
        }
    }
}