using System.IO;
using System.Threading.Tasks;

namespace mrsauravsahu.services.contracts
{
    public interface IBlobService
    {
        /// <Summary>
        /// Save a blob to the specified container with the given name
        /// </Summary>
        Task SaveBlobAsync(string container, string name, MemoryStream fileStream);

        /// <Summary>
        /// Retrieve a blob from a specified container with the given name
        /// </Summary>
        Task<MemoryStream> GetBlobAsync(string container, string name);
    }
}