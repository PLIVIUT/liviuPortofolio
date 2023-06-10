import React from 'react';
import './Navbar.css';
import ReactSwitch from 'react-switch';


const Navbar = (props) => {
    return (
        <div class="navbar-div">
            <nav className="navbar">
                <h1>Liviu's Portofolio</h1>
                <div class="links">
                    <a href="https://github.com/PLIVIUT">GitHub</a>
                    <a href="https://www.linkedin.com/in/pliviut/">LinkedIn</a>
                </div>
                <div class="darkMode">
                    <p>Dark Mode</p>
                    <ReactSwitch checkedIcon={false} uncheckedIcon={false} onChange={props.toggleThemes} checked={props.themes === "dark"} />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
