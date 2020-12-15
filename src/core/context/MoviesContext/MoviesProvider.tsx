import { FC, useState, useCallback, useEffect } from 'react';
import { MovieContext, initialState } from './MoviesContext';

import { IMoviePreview, IMoviePreviewResponse } from '../../models/MoviePreview';

import { httpGET } from '../../services/httpService';
import { config } from '../../config';
import { localStorageService } from '../../services/localStorageService';

export const MoviesProvider: FC = (props) => {
    const [movies, setMovies] = useState<IMoviePreview[]>(initialState.moviesList);
    const [favouriteMovies, setFavouriteMovies] = useState<{ [key: string]: IMoviePreview }>(initialState.favouriteMovies);
    const [error, setError] = useState<string>('');

    const onSearch = useCallback((searchText: string) => {
        if (searchText.trim()) {
            httpGET<IMoviePreviewResponse>(config.movieApi + `&s=${searchText}`).subscribe(
                result => {
                    if (result.Error) {
                        setError(result.Error);
                    }
                    else {
                        setError('');
                        setMovies(result.Search);
                    }
                },
                e => { setError(e.message) },
                () => console.log('Complete')
            );
        } else {
            setError('');
            setMovies([]);
        }
    }, []);

    const addMovieToFavourite = useCallback((movie: IMoviePreview) => {
        if (!favouriteMovies[movie.imdbID]) {
            setFavouriteMovies({
                ...favouriteMovies,
                [movie.imdbID]: movie
            });
        }
    }, [favouriteMovies]);

    const removeMovieFromFavourite = useCallback((movie: IMoviePreview) => {
        if (favouriteMovies[movie.imdbID]) {
            delete favouriteMovies[movie.imdbID];
            setFavouriteMovies({
                ...favouriteMovies
            });
        }
    }, [favouriteMovies]);

    useEffect(() => {
        setFavouriteMovies(localStorageService.get('favouritesMovies'));
    }, [setFavouriteMovies]);

    useEffect(() => {
        localStorageService.set('favouritesMovies', favouriteMovies);
    }, [favouriteMovies]);

    return <MovieContext.Provider value={{
        moviesList: movies,
        favouriteMovies,
        addMovieToFavourite,
        removeMovieFromFavourite,
        onSearch,
        error,
    }}>{props.children}</MovieContext.Provider>
};
