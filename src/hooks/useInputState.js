import { useState } from 'react';

function useInputState(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => setValue(e.target.value);
    const resetField = () => setValue("");

    return [value, handleChange, resetField];
}

export default useInputState
