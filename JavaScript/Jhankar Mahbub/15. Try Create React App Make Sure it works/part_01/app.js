fetch("https://restcountries.com/v3.1/all")
	.then((res) => res.json())
	.then((data) => displayCountries(data))
    .catch((error) => console.log(error));
    

const displayCountries = countries => {

    // console.log(countries);

    const conuntriesDiv = document.getElementById('countries');

    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];

        // console.log(country.name.common);

        const countryDiv = document.createElement('div');
        const name = document.createElement('h3');
        const capital = document.createElement('p');


        name.innerText = country.name.common;
        capital.innerText = country.name.common;

        countryDiv.appendChild(name);
        countryDiv.appendChild(capital);

        conuntriesDiv.appendChild(countryDiv);
        
    }



}