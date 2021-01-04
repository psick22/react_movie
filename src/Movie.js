import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const Movie = ({ title, summary, rating, genres, year, poster }) => (
  <div className="movie">
    <img src={poster} alt={title} title={title} />
    <div className="movie__data">
      <h3 className="movie__title">Title : {title}</h3>
      <h5 className="movie__rating">Rating : {rating} / 10.0</h5>
      <h5 className="movie__year">Year : {year}</h5>
      <ul className="movie__genres">
        {genres.map((genre, index) => {
          return (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          );
        })}
      </ul>
    </div>
    <p className="movie__summary">{summary.slice(0, 140)}</p>
  </div>
);

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
