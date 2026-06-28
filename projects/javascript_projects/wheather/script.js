const cityInput = document.querySelector(".city-input");
const submitBtn = document.querySelector(".submit-btn");

const apiKey = "6f1ee46fba1b5d1d3e67bda8b04dc6a9";

submitBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWeather();
  }
});

async function getWeather() {
  const city = cityInput.value.trim();

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found!");
    }

    const data = await response.json();

    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  let weatherCard = document.querySelector(".weather-card");

  if (weatherCard) {
    weatherCard.remove();
  }

  const card = document.createElement("div");
  card.className = "weather-card";

  card.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <h1>${data.main.temp}°C</h1>

        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

        <p><strong>${data.weather[0].main}</strong></p>
        <p>${data.weather[0].description}</p>

        <p>🌡 Feels Like : ${data.main.feels_like}°C</p>
        <p>💧 Humidity : ${data.main.humidity}%</p>
        <p>🌬 Wind : ${data.wind.speed} m/s</p>
        <p>🌡 Max Temp : ${data.main.temp_max}°C</p>
        <p>❄ Min Temp : ${data.main.temp_min}°C</p>
        <p>📊 Pressure : ${data.main.pressure} hPa</p>
    `;

  document.querySelector(".container").appendChild(card);
}
