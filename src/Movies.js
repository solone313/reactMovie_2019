import React from 'react';
import PropTypes from 'prop-types';
import "./Movies.css"
function Movie({id, year, title, summary , poster, genres}){
    return (
        <div className = "movies__movie">

            <img src={poster} alt={title} title={title} />
            <div className = "movie_data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="movie__genre">{genre}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;