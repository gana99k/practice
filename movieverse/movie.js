const API_KEY=" fa28bcb0";

const searchBtn=document.getElementById("searchBtn");
const searchInput=document.getElementById("searchInput");
const moviesContainer=document.getElementById("moviesContainer");
 async function searchMovies(movieName){
    const response=await fetch(`http://www.omdbapi.com/?apikey=fa28bcb0&s=${movieName}`);
    console.log(response);
    const data=await response.json();
    console.log(data);
 }
 searchMovies("Pushpa");