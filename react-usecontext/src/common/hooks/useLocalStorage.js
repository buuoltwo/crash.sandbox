/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2022-04-10 15:00:42
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-10 15:08:06
 */

import { useState } from 'react';

// Hooks
const useLocalStorage = (key, initialValue) => {
    // ensure the function is fired only once
    const [storedValue, setStoredValue] = useState(() => {
        if (!window.localStorage) return initialValue
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (e) {
            console.warn(e)
            return initialValue
        }
    })

    // setLocaleValue
    const setLocaleValue = (key, value) => {
        try {
            setStoredValue(value)
            localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.warn(e)
        }
    }

    return [storedValue, setLocaleValue]

}

export default useLocalStorage