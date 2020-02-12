import React, {useState, useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage.js';

export const useDarkMode = (key, initialValue) => {
    const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if (darkModeEnabled) {
            document.querySelector('body').classList.add('dark-mode');
        }
        else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    }, [darkModeEnabled])

    return [darkModeEnabled, setDarkModeEnabled]
}