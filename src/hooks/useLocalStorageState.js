import { useState, useEffect } from 'react'

function useLocalStorageState(key, defaultValue) {
    // This function will intercept the 'key' and sync it to local storage anytime it changes

    // Set initial 'value' to what we retrieve from local storage @key, or use 'defaultValue' if nothing there
    const [value, setValue] = useState(JSON.parse(window.localStorage.getItem(key)) || defaultValue);

    // update local storage anytime the 'value' changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export default useLocalStorageState