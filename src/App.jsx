import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState } from "react";

export const ThemeContext = createContext("dark");

export default function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App" id={theme}>
                <Navbar
                    toggleThemes={toggleTheme}
                    themes={theme} />
                <Home />
                <div className="projects">
                    <Projects />
                </div>
            </div>
        </ThemeContext.Provider>
    )
}