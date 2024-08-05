import React from "react";
import { useState } from "react";

function Header({onDarkModeClick}) {
    const [isOnDarkMode, setIsOnDarkMode] = useState(false);

    function handleInDarkMode() {
        setIsOnDarkMode(!isOnDarkMode);
        onDarkModeClick();
    }
    return (
        <div className="Header">
            <header>
                <h2>Shopster</h2>
                <button onClick={Header === "App Dark" ? handleInDarkMode : handleInDarkMode}>
                    {isOnDarkMode ? "Dark Mode 🌗" : "Light Mode ☀️"}
                </button>
            </header>
        </div> 
    )
}


export default Header;