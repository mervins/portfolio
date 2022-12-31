import {useState,useEffect} from "react";

const useDarkMode = ()=>{
    const [isDarkMode, setIsDarkMode] = useState(()=>localStorage.theme === 'light');

    const toggleDarkMode = ()=>{
        setIsDarkMode(!isDarkMode);
    };

    useEffect(()=>{
        const html = window.document.documentElement;
        const prevTheme = isDarkMode ? 'dark' : 'light';
        html.classList.remove(prevTheme);

        const nextTheme = isDarkMode ? 'light' : 'dark';
        html.classList.add(nextTheme);
        
        localStorage.setItem("theme", nextTheme);
    }, [isDarkMode]);

    return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;