import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation().pathname;
    return (
        <div className="container z-depth-2 topnav">
            <nav>
                <div className="nav-wrapper">
                    <a href="./index.html" className="brand-logo">Everett Humphreys</a>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/">
                                <span className={location === "/" ? "nav-link active" : "nav-link"}>About Me</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio">
                                <span className={location === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <span className={location === "/contact" ? "nav-link active" : "nav-link"} >Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li>
                    <Link to="/">
                        <span className={location === "/" ? "nav-link active" : "nav-link"}>About Me</span>
                    </Link>                    
                </li>
                <li>
                    <Link to="/portfolio">
                        <span className={location === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</span>
                    </Link>                
                </li>
                <li>
                    <Link to="/contact">
                        <span className={location === "/contact" ? "nav-link active" : "nav-link"} >Contact</span>
                    </Link>                    
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
