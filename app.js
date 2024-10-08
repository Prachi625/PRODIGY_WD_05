const weatherData = 
{
  london: 
  {
    condition: "Sunny",
    temperature: 25,
    humidity: 60,
    windSpeed: 10
  },

  new_york: 
  {
    condition: "Cloudy",
    temperature: 20,
    humidity: 70,
    windSpeed: 5
  },

  tokyo: 
  {
    condition: "Rainy",
    temperature: 22,
    humidity: 85,
    windSpeed: 12
  },

  paris:
  {
    condition: "Partly Cloudy",
    temperature: 23,
    humidity: 65,
    windSpeed: 8
  },

  sydney: 
  {
    condition: "Windy",
    temperature: 26,
    humidity: 50,
    windSpeed: 20
  },

  dubai: 
  {
    condition: "Hot",
    temperature: 38,
    humidity: 20,
    windSpeed: 15
  },

  mumbai: 
  {
    condition: "Humid",
    temperature: 30,
    humidity: 80,
    windSpeed: 7
  },

  toronto: 
  {
    condition: "Snowy",
    temperature: -5,
    humidity: 75,
    windSpeed: 5
  },

  berlin: 
  {
    condition: "Foggy",
    temperature: 15,
    humidity: 90,
    windSpeed: 6
  },

  beijing: 
  {
    condition: "Smoggy",
    temperature: 18,
    humidity: 55,
    windSpeed: 4
  }
};

document.getElementById('city-select').addEventListener('change', function() 
{
  const city = this.value;
  document.getElementById('city-name').textContent = city.charAt(0).toUpperCase() + city.slice(1);
  document.getElementById('weather-condition').textContent = weatherData[city].condition;
  document.getElementById('temp-current').textContent = weatherData[city].temperature;
  document.getElementById('humidity').textContent = weatherData[city].humidity;
  document.getElementById('wind-speed').textContent = weatherData[city].windSpeed;

  document.querySelector('.weather-info').style.display = 'block';
});