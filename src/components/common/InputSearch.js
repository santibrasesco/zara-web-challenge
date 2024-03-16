import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export const InputSearch = ({ value, placeholder, onChange, delay }) => {
    const [searchValue, setSearchValue] = useState(value);

    const prevDebouncedValueRef = useRef();
    const debouncedValue = useDebounce(searchValue, delay);

    useEffect(() => {
        const prevDebouncedValue = prevDebouncedValueRef.current;
        prevDebouncedValueRef.current = debouncedValue;
        setSearchValue(value);
        prevDebouncedValue !== debouncedValue && onChange(debouncedValue);
    }, [value, debouncedValue])

    return (
        <input
            placeholder={placeholder || ''}
            value={searchValue}
            onChange={evt => setSearchValue(evt.target.value)}
        />
    )
}