import React from "react"
import { NavLink } from "react-router-dom";
import "../index.css"


function Navbar() {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">JUPITER.IO</NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activeMenuClass" className="nav-link" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="activeMenuClass" className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="activeMenuClass" className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="activeMenuClass" className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;