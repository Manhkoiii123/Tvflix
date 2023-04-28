"use strict";
const api_key = '215b7388a50135da76601db1ca0183ba';
const imageBaseURL = 'http://image.tmdb.org/t/p/' //tren post man

// fetch data from a server using the url and passes the result in JSON
// data to a callback func,
// along with an optional paramerter if has optionalParam

const fetchDataFromServer = function(url,callback,optionalParam){
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data,optionalParam));
        
}

export {imageBaseURL ,api_key ,fetchDataFromServer};