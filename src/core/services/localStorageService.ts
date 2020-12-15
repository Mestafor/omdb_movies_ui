export type LocalStorageItem = 'favouritesMovies';

export const localStorageService = {
    get(item: LocalStorageItem) {
        return JSON.parse(localStorage.getItem(item) || '{}');
    },

    set<T>(item: LocalStorageItem, value: T) {
        localStorage.setItem(item, JSON.stringify(value));
    }
}