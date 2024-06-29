const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weather-info');
const forecastList = document.getElementById('forecast-list');

searchButton.addEventListener('click', fetchWeatherData);

function fetchWeatherData() {
    const location = locationInput.value.trim();
    if (location) {
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API%20key}`)
            .then(response => response.json())
            .then(data => {
                displayWeatherData(data);
            })
            .catch(error => console.error(error));
    }
}

function displayWeatherData(data) {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    locationElement.textContent = data.name;
    temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;

    const forecast = data.list;
    forecastList.innerHTML = '';

    forecast.forEach(day => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" />
            <span>${day.dt_txt}</span>
            <span>Temp: ${day.main.temp}°C</span>
        `;
        forecastList.appendChild(listItem);
    });
}