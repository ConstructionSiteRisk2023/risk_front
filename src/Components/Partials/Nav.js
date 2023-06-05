import React  from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Nav = () => {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div>
                    <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                        Home
                    </Link>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Nav