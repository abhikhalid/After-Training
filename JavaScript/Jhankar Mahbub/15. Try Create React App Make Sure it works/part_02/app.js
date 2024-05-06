fetch("https://restcountries.com/v3.1/all")
	.then((res) => res.json())
	.then((data) => displayCountries(data))
	.catch((error) => console.log(error));

const displayCountries = (countries) => {
	console.log(countries);

	const conuntriesDiv = document.getElementById("countries");

	// for (let i = 0; i < countries.length; i++) {
	//     const country = countries[i];

	//     // console.log(country.name.common);

	//     const countryDiv = document.createElement('div');

	//     countryDiv.className = 'country';

	//     const countryInfo = `

	//         <h3 class="country-name">${country.name.common}</h3>
	//         <p>${country.capital[0]}</p>`

	//     countryDiv.innerHTML = countryInfo;

	//     conuntriesDiv.appendChild(countryDiv);

	// }

	countries.forEach((countryy) => {
		const country = countryy;

		// console.log(country.name.common);

		const countryDiv = document.createElement("div");

		countryDiv.className = "country";

		const countryInfo = `
        
            <h3 class="country-name">${country.name.common}</h3>
            <p>${country.capital}</p>
               <button onclick="displayCountryDetail('${country.name.common}')">Details</button> 
            `;

		countryDiv.innerHTML = countryInfo;

		conuntriesDiv.appendChild(countryDiv);
	});
};






const displayCountryDetail = name => {

    // console.log(name);

    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]))
        .catch(error => console.log(error))

}


const renderCountryInfo = country => {

    console.log(country);

    const countryDiv = document.getElementById('countryDetail');

    countryDiv.innerHTML = `

        <h1>${country.name.common}</h1>
        <p>Population : ${country.population}</p>
        <p>Area : ${country.area}</p>
        <img src="${country.flags.svg}" >

    `


}