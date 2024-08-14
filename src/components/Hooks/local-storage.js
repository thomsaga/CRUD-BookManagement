import { useState, useEffect } from "react";

/**
 * Custom hook untuk menyimpan state di localStorage.
 * @param {string} key - Kunci untuk localStorage.
 * @param {*} initialValue - Nilai awal jika tidak ada data di localStorage.
 * @returns {[*, Function]} - State saat ini dan fungsi untuk memperbarui state.
 */
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      console.error(`Error parsing localStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
