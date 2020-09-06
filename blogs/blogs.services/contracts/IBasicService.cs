using System.Collections.Generic;
using System.Threading.Tasks;
using blogs.services.contracts;
using Sieve.Models;

namespace blogs.services
{
    public interface IBasicService<T>
    {
        Task<PaginatedResult<List<T>>> GetAllAsync(SieveModel sieve);
    }
}