import React from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    

    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/youtube'>Youtube</NavLink>
            <NavLink to ='/aboutPage'>About</NavLink>
        </nav>
    )
}

export default NavBar