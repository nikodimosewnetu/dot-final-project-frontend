import React from 'react';
import '../styles/Card.css';

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="card-body">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <p>{movie.Type}</p>
      </div>
    </div>
  );
};

export default Card;
