import React from 'react'
import "./MovieCard.css";
const MovieCard = ({movie}) => {
  return (
    <div>
      
      <div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={movie.posterUrl}/>
      <h1>{movie.title}</h1>
    </div>
    <div class="movie_desc">
      <p class="text">
      {movie.description}
      </p>
    </div>
  </div>
  <div class="blur_back bright_back"></div>
</div>
    </div>
  )
}

export default MovieCard
