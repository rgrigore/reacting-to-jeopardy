import React from "react";
import logo from '../../img/jeopardy_logo.png';
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

function Header() {
    return(
        <header className="mt-4" style={imgStyle}>
            <Link to={"/"}>
                <img src={logo} alt="logo"/>
            </Link>
            <Navbar />
        </header>
    )
}

const imgStyle = {
    textAlign: 'left',
    margin: '0 auto',
    padding: '0px'
}

export default Header;