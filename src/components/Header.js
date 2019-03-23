import React from 'react'
import { NavLink } from 'react-router-dom'



const Header = () => {
    return (
        <div className = "header">
            <NavLink to = '/' activeClassName = "selected">Home</NavLink>
            <NavLink to = '/about' activeClassName = "selected">About Us</NavLink>
            <NavLink to = '/contact' activeClassName = "selected">Contact Us</NavLink>
        </div>
    )
}

export default Header;