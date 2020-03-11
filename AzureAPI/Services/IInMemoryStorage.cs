using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AzureAPI.Services
{
    interface IInMemoryStorage<T>
    {
        Task AddAsync(T item);

        Task DeleteAsync(int id);

        Task<T> GetAsync(int id);

        Task<IEnumerable<T>> GetAllAsync();
    }
}
