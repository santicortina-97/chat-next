import { useState } from "react";

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() =>{
        const savedMode = localStorage.getItem("dark");
        return savedMode ? JSON.parse(savedMode) : false;
    });


    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem("dark", JSON.stringify(newMode));
            return newMode;
        });
    };

    return {
        toggleDarkMode,
        isDarkMode,
    };
};

export default useDarkMode;