using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AzureAPI.Services
{
    public class WeatherForecastInMemoryStorage : IInMemoryStorage<WeatherForecast>
    {
        public WeatherForecastInMemoryStorage()
        {
            var rng = new System.Random();

            _weatherForecasts.AddRange(Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Guid = System.Guid.NewGuid().ToString(),
                Date = System.DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToList()); ;
        }

        public Task AddAsync(WeatherForecast item)
        {
            if (!_weatherForecasts.Contains(item))
            {
                _weatherForecasts.Add(item);
            }

            return Task.CompletedTask;
        }

        public Task DeleteAsync(string guid)
        {
            var forecastToDelete = _weatherForecasts.FirstOrDefault(forecast => forecast.Guid == guid);
            _weatherForecasts.Remove(forecastToDelete);

            return Task.CompletedTask;
        }

        public Task<WeatherForecast> GetAsync(string guid)
        {
            var forecast = _weatherForecasts.FirstOrDefault(forecast => forecast.Guid == guid);

            return Task.FromResult(forecast);
        }

        public Task<IEnumerable<WeatherForecast>> GetAllAsync()
        {
            return Task.FromResult(_weatherForecasts.AsEnumerable());
        }

        private List<WeatherForecast> _weatherForecasts = new List<WeatherForecast>();


        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };
    }
}
