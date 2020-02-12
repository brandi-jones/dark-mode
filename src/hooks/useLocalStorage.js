import React, {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (JSON.parse(window.localStorage.getItem(key))) {
            return JSON.parse(window.localStorage.getItem(key))
        }
        else {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    }); //whatever returns from this callback function in useState, gets set as the initial value

    //setter function
    function setValue(value) {
        //save state
        setStoredValue(value);
        //save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue]
}