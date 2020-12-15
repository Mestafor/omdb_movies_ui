import { createContext } from "react";
import { IMoviePreview } from '../../models/MoviePreview';

export interface IMovieContext {
    moviesList: IMoviePreview[];
    favouriteMovies: { [key: string]: IMoviePreview };
    onSearch?: (searchText: string) => void;
    addMovieToFavourite?: (movie: IMoviePreview) => void;
    removeMovieFromFavourite?: (movie: IMoviePreview) => void;
    error: string;
}

export const initialState: IMovieContext = {
    moviesList: [],
    favouriteMovies: {},
    error: '',
};

export const MovieContext = createContext<IMovieContext>(initialState);
