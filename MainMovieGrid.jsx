import movies from '../data/movies';
import MovieDetails from './MovieDetails';
import GridStyles from '../MovieGrid.module.css'

import PropTypes from "prop-types";



const MainMovieGrid = ({ movieList }) => {
    return(
        <>
        <h3> Listado!</h3>
        <ul className = {GridStyles.movieGrid}>
        { movieList.map(function(oneMovie) {
                return(
                    <MovieDetails oneMovie = {oneMovie}/>
                ) ;
            })}
        </ul>
       
        </>
    );
}

export default MainMovieGrid;