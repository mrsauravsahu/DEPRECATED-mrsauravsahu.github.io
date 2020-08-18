using System.IO;
using System.Threading.Tasks;
using blogs.services.contracts;

namespace blogs.services
{
    public class LocalFileService : IBlobService
    {
        private readonly string basePath;

        public LocalFileService(string basePath)
        {
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
                var filePath = Path.Combine(basePath, container, name);

                var fileStream = File.Create(filePath);
                stream.WriteTo(fileStream);
            });
        }
    }
}