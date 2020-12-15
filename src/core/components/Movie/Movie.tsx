import { useCallback } from 'react';
import { IMoviePreview } from '../../models/MoviePreview';

import './_style.scss';

export const Movie = (props: { movie: IMoviePreview, onClick: (movie: IMoviePreview) => void }) => {
    const { movie, onClick } = props;

    const clickHandler = useCallback(() => {
        onClick(movie);
    }, [onClick, movie]);

    return <article className="movie-view hover" onClick={clickHandler}>
        <img src={movie.Poster} alt={movie.Title} />

        <footer className="hover__item movie-view__footer">
            {movie.Title}
        </footer>
    </article>;
};
