import React from 'react';
import logo from './logo-white.svg';
import './App.css';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" width="75" />
            <h1 className="rale">
                Biró Vince
            </h1>
            <a
                className="rale App-link"
                href="mailto:hello@birovince.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Let's talk!
            </a>
        </header>
    );
}

export default Header;