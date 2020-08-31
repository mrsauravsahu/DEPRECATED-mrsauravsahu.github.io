using System.Collections.Generic;
using System.Threading.Tasks;
using blogs.services.contracts;

namespace blogs.services
{
    public interface IBasicService<T>
    {
        Task<PaginatedResult<List<T>>> GetAllAsync();
    }
}