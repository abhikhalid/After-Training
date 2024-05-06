fetch("https://restcountries.com/v3.1/all")
	.then((res) => res.json())
	.then((data) => displayCountries(data))
    .catch((error) => console.log(error));
    

const displayCountries = countries => {

    // console.log(countries);

    const ul = document.getElementById('countries');

    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];

        // console.log(country.name.common);

        const li = document.createElement('li');

        li.innerText = country.name.common;

        ul.appendChild(li);
        
    }



}