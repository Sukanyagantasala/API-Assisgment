document.getElementById("search").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const apiKey = "c3d2b91ff89b76afaa7766078a62b060"; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
          const location = data.name;
          const temperature = data.main.temp;
          const description = data.weather[0].description;

          document.getElementById("location").textContent = `Location: ${location}`;
          document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
          document.getElementById("description").textContent = `Description: ${description}`;
      })
      .catch((error) => {
          console.error("Error fetching data:", error);
      });
});



