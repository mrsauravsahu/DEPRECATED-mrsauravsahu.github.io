using System.IO;
using System.IO.Abstractions;
using System.Threading.Tasks;
using blogs.services.contracts;

namespace blogs.services
{
    public class LocalFileService : IBlobService
    {
        private readonly IFileSystem fileSystem;
        private readonly string basePath;

        public LocalFileService(IFileSystem fileSystem, string basePath)
        {
            this.fileSystem =fileSystem;
            this.basePath = basePath;
        }

        public Task<MemoryStream> GetBlobAsync(string container, string name)
        {
            throw new System.NotImplementedException();
        }

        public async Task SaveBlobAsync(string container, string name, MemoryStream stream)
        {
            await Task.Run(() =>
            {
var containerPath = fileSystem.Path.Combine(new string[] {basePath, container});
if(!Directory.Exists(containerPath)){
// Directory.CreateDirectory(containerPath)
return ;
}


                var filePath = fileSystem.Path.Combine(new string[] {basePath, container, name});

                var fileStream = fileSystem.File.Create(filePath);
                stream.WriteTo(fileStream);
            });
        }
    }
}