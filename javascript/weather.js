const apiKey = '5ae1e95886564a2e91f172853252804';

// Get the current page name to decide which city to load weather for
let currentPage = window.location.pathname.split('/').pop();  // Get the page name (e.g., baguio.html)

let city = '';  // Default city

if (currentPage === 'burnham.html') {
  city = 'Burnham Park';
} else if (currentPage === 'mayon.html') {
  city = 'Mayon Volcano';
} else if (currentPage === 'taal.html') {
  city = 'Taal Lake';
} else if (currentPage === 'intramuros.html') {
  city = 'Intramuros';
} else if (currentPage === 'sumaguing.html') {
  city = 'Sumaguing Cave';
} else if (currentPage === 'hundredislands.html') {
  city = 'Hundred Islands';
} else if (currentPage === 'bangui.html') {
  city = 'Bangui Windmills';
} else if (currentPage === 'masungi.html') {
  city = 'Masungi Georeserve';
} else if (currentPage === 'magellan.html') {
  city = 'Plaza Sugbo';
} else if (currentPage === 'bantayan.html') {
  city = 'Bantayan Island';
} else if (currentPage === 'kawasan.html') {
  city = 'Kawasan Falls';
} else if (currentPage === 'chocolate.html') {
  city = 'Chocolate Hills';
} else if (currentPage === '1730.html') {
  city = '1730 Jesuit House';
} else if (currentPage === 'boracay.html') {
  city = 'Malay, Aklan';
} else if (currentPage === 'mosque.html') {
  city = 'The Grand Mosque';
} else if (currentPage === 'mtapo.html') {
  city = 'Mount Apo';
} else if (currentPage === 'samal.html') {
  city = 'Island Garden City of Samal';
} else if (currentPage === 'sunken.html') {
  city = 'Sunken Cemetery';
} else if (currentPage === 'monfort.html') {
  city = 'Monfort Bat Sanctuary';
} else if (currentPage === 'eaglecenter.html') {
  city = 'Philippine Eagle Center';
}else if (currentPage === 'museodabawenyo.html') {
  city = 'Museo Dabawenyo';
}else if (currentPage === 'enchanted.html') {
  city = 'Enchanted River';
}else if (currentPage === 'camiguin.html') {
  city = 'Camiguin Island';
} else {
  city = 'Default Location';  // If the page is not identified
}

const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
      <h2>Weather in ${city}</h2>
      <p>Temperature: ${data.current.temp_c}°C</p>
      <p>Condition: ${data.current.condition.text}</p>
      <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}">
    `;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = 'Weather data not available.';
  });
