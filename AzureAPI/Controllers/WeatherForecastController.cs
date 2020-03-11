using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AzureAPI.Requests;
using AzureAPI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AzureAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        public WeatherForecastController(
            IInMemoryStorage<WeatherForecast> weatherForecastStorage)
        {
            _weatherForecastStorage = weatherForecastStorage;
        }

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet("/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var weatherForecast = await _weatherForecastStorage.GetAsync(id);

            return Ok(weatherForecast);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateWeatherForecastDto forecastDto)
        {
            if (ModelState.IsValid)
            {
                Guid guid = Guid.NewGuid();

                var weatherForecast = new WeatherForecast()
                {
                    Guid = guid.ToString(),
                    Date = forecastDto.Date,
                    Summary = forecastDto.Summary,
                    TemperatureC = forecastDto.TemperatureC
                };

                await _weatherForecastStorage.AddAsync(weatherForecast);

                return Created($"api/weatherForecast/{guid.ToString()}", weatherForecast);
            }

            return BadRequest();
        }


        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IInMemoryStorage<WeatherForecast> _weatherForecastStorage;
    }
}
