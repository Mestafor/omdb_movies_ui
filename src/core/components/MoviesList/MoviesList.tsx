import { Movie } from '../Movie/Movie';
import { IMoviePreview } from '../../models/MoviePreview';

import './_style.scss';

export const MoviesList = (props: { movies: IMoviePreview[], error: string, onItemClick: (movie: IMoviePreview) => void}) => {
    const { movies, error, onItemClick } = props;

    if (error) {
        return <div className="text-center error-color">{error}</div>;
    }

    if (movies.length === 0) {
        return <div className="content">Nothing to show</div>;
    }

    return <div className="movie-grid">
        {movies.map(movie => <div className="movie-grid__item" key={movie.imdbID}><Movie movie={movie} onClick={onItemClick} /></div>)}
    </div>;
};
