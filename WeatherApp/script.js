document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-button");
    const clearButton = document.querySelector(".reset-button");
    const apiKey = "920997b273c948af633e4942df4aaaa7";

    searchButton.addEventListener("click", function() {
        const city = document.getElementById("search-city").value;
        const state = document.getElementById("search-state").value;
        const country = document.getElementById("search-country").value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayWeather(data));
    });

    clearButton.addEventListener("click", function() {
        document.getElementById("search-city").value = "";
        document.getElementById("search-state").value = "";
        document.getElementById("search-country").value = "";
        document.querySelector(".display-div").innerHTML = "";
    });

    function displayWeather(data) {
        const displayDiv = document.querySelector(".display-div");
        displayDiv.innerHTML = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    }
});
