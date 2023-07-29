import MainMovieGrid from './MainMovieGrid';
import MOVIE_DATA from '../data/movies.json'

function Warper(){
    return(
        <>
            {/*Truco del Tag lipio para renderizar más de un componente*/}
            <header>
                <h1>Películas Que he visto!</h1>
            </header>

            <MainMovieGrid  movieList = {MOVIE_DATA}/>

       </>
    );
}

export default Warper;