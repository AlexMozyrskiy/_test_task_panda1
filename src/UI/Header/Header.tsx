import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
        <div className="container">
            <div className="header__flex-wrapper">
                <div className="header__logo-and-title">
                    <h2 className="header__title">Test Task for Crazy Panda</h2>
                </div>
                <nav className="header__nav">
                    <ul className="header__ul">
                        <li className="header__li">
                            <NavLink to="/" className="header__anchor">Task</NavLink>
                        </li>
                        <li className="header__li">
                            <NavLink to="/comments" className="header__anchor">Comments To the Task</NavLink>
                        </li>
                        <li className="header__li">
                            <NavLink to="/cv" className="header__anchor">My CV</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}

export default Header;