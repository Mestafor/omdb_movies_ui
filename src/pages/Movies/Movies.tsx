import { MoviesList } from '../../core/components/MoviesList/MoviesList';
import { SearchMovie } from '../../core/components/SearchMovie/SearchMovie';
import { useContext, useCallback } from 'react';
import { MovieContext } from '../../core/context/MoviesContext/MoviesContext';
import { IMoviePreview } from '../../core/models/MoviePreview';

export const Movies = () => {
    const {error, favouriteMovies, moviesList, addMovieToFavourite, removeMovieFromFavourite} = useContext(MovieContext)

    const addToFavourite = useCallback((movie: IMoviePreview) => {
        addMovieToFavourite!(movie);
    }, [addMovieToFavourite]);

    const removeFromFavourite = useCallback((movie: IMoviePreview) => {
        removeMovieFromFavourite!(movie);
    }, [removeMovieFromFavourite]);

    return <>
        <SearchMovie />
        <section>
            <h1 className="content">Movies</h1>
            <MoviesList error={error} movies={moviesList} onItemClick={addToFavourite} />
        </section>
        {/* TODO: move favourites movies to anoter context */}
        {Object.keys(favouriteMovies).length > 0 && <section>
            <h1 className="content">Favourites</h1>
            <MoviesList error={''} movies={Object.values(favouriteMovies)} onItemClick={removeFromFavourite} />
        </section>}
        
    </>;
}