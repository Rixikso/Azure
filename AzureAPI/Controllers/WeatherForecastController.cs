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
            ILogger<WeatherForecastController> logger,
            IInMemoryStorage<WeatherForecast> weatherForecastStorage)
        {
            _logger = logger;
            _weatherForecastStorage = weatherForecastStorage;
        }

        [HttpGet("/{guid}")]
        public async Task<IActionResult> Get(string guid)
        {
            var weatherForecast = await _weatherForecastStorage.GetAsync(guid);

            return Ok(weatherForecast);
        }

        [HttpGet]
        public async Task<IEnumerable<WeatherForecast>> GetAll()
        {
            var weatherForecasts = await _weatherForecastStorage.GetAllAsync();

            return weatherForecasts;
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

                _logger.LogInformation($"Added new weatherForecast Guid: {guid.ToString()}");

                return Created($"api/weatherForecast/{guid.ToString()}", weatherForecast);
            }

            _logger.LogError($"Passed dto was bad");

            return BadRequest();
        }


        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IInMemoryStorage<WeatherForecast> _weatherForecastStorage;
    }
}
