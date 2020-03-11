using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AzureAPI.Services
{
    public interface IInMemoryStorage<T>
    {
        Task AddAsync(T item);

        Task DeleteAsync(string guid);

        Task<T> GetAsync(string guid);

        Task<IEnumerable<T>> GetAllAsync();
    }
}
