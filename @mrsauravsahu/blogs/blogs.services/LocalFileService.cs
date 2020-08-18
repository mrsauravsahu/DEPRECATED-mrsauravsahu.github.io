using System.IO;
using System.Threading.Tasks;
using blogs.services.contracts;

namespace blogs.services
{
    public class LocalFileService : IBlobService
    {
        public Task<MemoryStream> GetBlobAsync(string container, string name)
        {
            throw new System.NotImplementedException();
        }

        public Task SaveBlobAsync(string container, string name, MemoryStream fileStream)
        {
            throw new System.NotImplementedException();
        }
    }
}