import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultValue, reducer) {
    // This function will intercept the 'key' and sync it to local storage anytime 'state' is changed by 'dispatch'

    // Set initial 'state' to what we retrieve from local storage @key, or use 'defaultValue' if nothing there
    // Create a dispatch function based on the supplied reducer function that can be used to modify 'state'
    const [state, dispatch] = useReducer(reducer, defaultValue, () => {
        let value;
        try {
            value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
        } catch (e) {
            value = defaultValue;
        }
        return value;
    });

    // update local storage anytime the 'state' changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, dispatch];
}

export { useLocalStorageReducer };