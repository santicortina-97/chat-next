import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("dark");
        setIsDarkMode(savedMode ? JSON.parse(savedMode) : false);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        localStorage.setItem("dark", JSON.stringify(newMode));
        setIsDarkMode(newMode);
    };

    return {
        toggleDarkMode,
        isDarkMode,
    };
};

export default useDarkMode;
