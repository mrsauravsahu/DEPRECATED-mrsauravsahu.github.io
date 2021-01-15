using System.Collections.Generic;
using System.Threading.Tasks;
using mrsauravsahu.services.contracts;
using Sieve.Models;

namespace mrsauravsahu.services
{
    public interface IBasicService<T>
    {
        Task<PaginatedResult<List<T>>> GetAllAsync(SieveModel sieve);
    }
}