import React, { useEffect, useState } from 'react'
import instance from './axios';
import axios from "./axios";
import requests from './requests';
import './Banner.css';
function Banner() {
    const[movie , setmovies] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setmovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            console.log(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        } //All movies to single string randomly 
        fetchData();
    } ,[]);
    console.log(movie);
    function truncate(str , n){
        // n = how many characters are allowed
        return str?.length > n ? (str.substr(0 , n-1) + "...") : str; 
    }
  return (
    <div>
      <header className='banner'
          style = {{
            // height: "100vh",
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
          }}>
    <div className="banner-content">

     <h1 className='banner-title'>
        {movie?.title || movie?.name || movie?.original_name}
     </h1>
     <div className="banner-buttons">
        <button className="banner-button">Play</button>
        <button className="banner-button">List</button>
     </div>
     <h1 className='description'>
        {truncate(movie?.overview,150)} </h1>
    </div>
    <div className="banner-fadebottom"/>

    
      </header>
    </div>
  )
}

export default Banner
