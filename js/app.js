// console.log(superagent);
var request = superagent;

function handleInfoCountries(apiRes){
  // console.log(apiRes);
    var flagsContainerEl = document.querySelector('#app-container .countries-container')
      // console.log(apiRes.body);

    var responseObj = apiRes.body


    // console.log(responseObj);

    var arrOfCount = responseObj.map(function handleInfoCountries(someEl, index){
        console.log(someEl);
        // console.log(arrOfCount);
        return `
          <div class="country-card">
            <img class="country-flag" src="${someEl.flag}" alt="flag">
            <h4 class="country-name">${someEl.name}</h4>
            <p class="country-capital">${someEl.capital}</p>
          </div>`

      })


      var arrStrCount = arrOfCount.join("");
      // console.log(arrStrCount);

        flagsContainerEl.innerHTML = arrOfCount
    }










// iterar sobre los datos con map esto convertira el array de objetos en un array de strings

// hacer un .join sobre l array de strings para coincatenar los datos espedificos que rquieros

//hacer iinner html para mostrar los datos


request
  .get('https://restcountries.eu/rest/v2/all')
  .then(handleInfoCountries)
