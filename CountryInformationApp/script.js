// // Get a reference to the country info container
// const countryInfoContainer = document.querySelector('.country-info');

// // Function to fetch and display country information
// function fetchCountryInfo() {
//   // API endpoint URL
//   const apiUrl = 'https://restcountries.com/v3/all';

//   // Fetch data from the API
//   fetch(apiUrl)
//     .then((response) => {
//       // Check if the response status is OK (200)
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Pick a random country from the API response
//       const randomIndex = Math.floor(Math.random() * data.length);
//       const country = data[randomIndex];

//       // Update the HTML with country information
//       countryInfoContainer.innerHTML = `
//         <h2>${country.name.common}</h2>
//         <p><strong>Capital:</strong> ${country.capital[0]}</p>
//         <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
//         <p><strong>Region:</strong> ${country.region}</p>
//         <p><strong>Subregion:</strong> ${country.subregion}</p>
//         <img src="${country.flags.png}" alt="${country.name.common} Flag" width="200">
//       `;
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//       countryInfoContainer.innerHTML = '<p>Failed to load country information.</p>';
//     });
// }

// // Call the fetchCountryInfo function when the page loads
// window.addEventListener('load', fetchCountryInfo);



let searchBtn=document.getElementById("search-btn");
let countryInp=document.getElementById("country-inp");
searchBtn.addEventListener("click",()=>{
  let countryName=countryInp.value;
  let finalURL=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);

  fetch(finalURL)
  .then((response)=> response.json())
  .then((data)=>{
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].continents[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(Object.values(data[0].languages).toString().split(",").join(", ")
      );
      result.innerHTML=`
      <img src="${data[0].flags.svg}"
      class="flag-img">
      <h2>${data[0].name.common}</h2>
      <div class="wrapper">
        <div class="data-wrapper"
           <h4>Capital:</h4>
           <span>${data[0].capital[0]}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper"
           <h4>Continet:</h4>
           <span>${data[0].continents[0]}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper"
           <h4>Population:</h4>
           <span>${data[0].population}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper"
           <h4>Currency:</h4>
           <span>${
            data[0].currencies[Object.keys(data[0].currencies)].name
            } - ${Object.keys(data[0].currencies)[0]}
          </span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper"
           <h4>Common Languages:</h4>
           <span>${Object.values(data[0].languages)
            .toString().split(",").join(", ")}
          </span>
        </div>
      </div>
      `;
      
  });
});