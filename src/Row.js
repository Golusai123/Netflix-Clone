import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';


function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  async function handleHover(movie) {
    if (trailerUrl) {
      setTrailerUrl(''); // Close the trailer if hovering over another movie
    } else {
      try {
        const trailerRequest = await axios.get(
          `/movie/${movie.id}/videos?api_key=c0fc8e10e94827f7cf543de4be53ed48`
        );
        const trailer = trailerRequest.data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          setTrailerUrl(trailer.key);
        } else {
          console.log('No trailer found');
        }
      } catch (error) {
        console.error('Failed to fetch the trailer', error);
      }
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onMouseEnter={() => handleHover(movie)}
            onMouseLeave={() => setTrailerUrl('')}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
