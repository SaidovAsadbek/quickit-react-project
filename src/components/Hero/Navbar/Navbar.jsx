import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    const activeLink = " activeClass";
    const activeFunc = ({ isActive }) => (isActive ? activeLink : "");

    return (
        <nav className="hero-navbar">
            <div className="container">
                <div className="row">
                    <div className="left-side flex">
                        <NavLink className="navbar-brand" to="/">
                            <img src="./images/brand.svg" alt="Navbar-brand" />
                        </NavLink>
                        <ul className="links flex">
                            <li className="link">
                                <NavLink className={activeFunc} to="/">
                                    Why Quickit
                                </NavLink>
                            </li>
                            <li className="link">
                                <NavLink className={activeFunc} to="/solution">
                                    Solutions
                                </NavLink>
                            </li>
                            <li className="link">
                                <NavLink className={activeFunc} to="/resources">
                                    Resources
                                </NavLink>
                            </li>
                            <li className="link">
                                <NavLink className={activeFunc} to="/pricing">
                                    Pricing
                                </NavLink>
                            </li>
                            <li className="link">
                                <NavLink className={activeFunc} to="/contact">
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="right-side flex">
                        <img
                            src="./images/language.svg"
                            alt="Language-changed"
                        />
                        <div className="div-provider"></div>
                        <div className="request-btn">
                            <button>
                                <NavLink to="/login">Log in</NavLink>
                            </button>
                            <button>
                                <NavLink to="/request-demo">
                                    Request a demo
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
