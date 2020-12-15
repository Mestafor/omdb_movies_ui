import { useCallback, useContext, useMemo } from "react";
import { MovieContext } from '../../context/MoviesContext/MoviesContext';
import { debounceFn } from "../../helpers/debounceFn";

import './_style.scss';

export const SearchMovie = () => {
    const { onSearch } = useContext(MovieContext);

    const debounceChange = useMemo(() => {
        return debounceFn(500, onSearch!);
    }, [onSearch]);

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            debounceChange(value);
        },
        [debounceChange],
    )

    return <div className="search-movie">
        <input type="text" onChange={onChange} autoFocus />
    </div>;
};
