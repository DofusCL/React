import Styles from  '../../src/MovieDetails.module.css';
import PropTypes from "prop-types";

function MovieDetails({oneMovie}){
    const imageUrl = 'https://image.tmdb.org/t/p/w300';
    
    return(
        <>
        <li key={oneMovie.id} className={Styles.movieTextDetails}>
        {/* USando Templates Literales*/}
            <div><h3>{`${oneMovie.title}`}</h3></div>
            <img src={`${imageUrl}`+ `${oneMovie.poster_path}`} alt = {oneMovie.title} className={Styles.movieImage}/>
        </li>
        </>
    );
}
export default MovieDetails;
