using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AzureAPI.Services
{
    public class WeatherForecastInMemoryStorage : IInMemoryStorage<WeatherForecast>
    {
        public Task AddAsync(WeatherForecast item)
        {
            if (!_weatherForecasts.Contains(item))
            {
                _weatherForecasts.Add(item);
            }

            return Task.CompletedTask;
        }

        public Task DeleteAsync(int id)
        {
            var forecastToDelete = _weatherForecasts.FirstOrDefault(forecast => forecast.Id == id);
            _weatherForecasts.Remove(forecastToDelete);

            return Task.CompletedTask;
        }

        public Task<WeatherForecast> GetAsync(int id)
        {
            var forecast = _weatherForecasts.FirstOrDefault(forecast => forecast.Id == id);

            return Task.FromResult(forecast);
        }

        public Task<IEnumerable<WeatherForecast>> GetAllAsync()
        {
            return Task.FromResult(_weatherForecasts.AsEnumerable());
        }

        private List<WeatherForecast> _weatherForecasts = new List<WeatherForecast>();
    }
}
