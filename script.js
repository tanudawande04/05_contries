const countriesContainer = document.querySelector('.contries-container'); // corrected selector

fetch('https://restcountries.com/v3.1/independent?status=true')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      const countryCard = document.createElement('a');
      countryCard.classList.add('country-card');
      countryCard.href = `/country.html?name=${country.name.common}`;
      countryCard.innerHTML = `
        <img src="${country.flags.svg}" alt="flag" />
        <div class="card-text">
            <h3 class="card-title">${country.name.common}</h3>
            <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
            <p><b>Region: </b>${country.region}</p>
            <p><b>Capital: </b>${country.capital?.[0] || 'N/A'}</p>
        </div>
      `;
      countriesContainer.appendChild(countryCard); // use appendChild
    });
  });


