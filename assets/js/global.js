"use strict";

// mở menu search
const addEventOnElement = function(eles ,eventType,callback){
    for (const ele of eles){
        ele.addEventListener(eventType,callback)
    }
}

// toggle search box in mobile
const searchBox = document.querySelector('[search-box]');
const searchTogglers = document.querySelectorAll('[search-toggler]')

addEventOnElement(searchTogglers,'click', function(){
    searchBox.classList.toggle('active')
})

// localstorage khi aasn vaof 1 movie card nao do
const getMovieDetail = function(movieId){
    window.localStorage.setItem("movieId",String(movieId));
}


const getMovieList = function(urlParam,genreName){
    window.localStorage.setItem("urlParam",urlParam);
    window.localStorage.setItem("genreName",genreName);
}