export function debounceFn<T>(ms: number, fn: (value: T) => void) {

    let timeout: number;

    return (value: T) => {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            typeof fn === 'function' && fn(value);
        }, ms);
    }
}