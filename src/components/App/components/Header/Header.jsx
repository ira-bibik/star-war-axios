import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='navbar'>
      <NavLink to={"/"} className="navbar-item">
        People
      </NavLink>
      <NavLink to={"/planets"} className="navbar-item">
        Planets
      </NavLink>
      <NavLink to={"/starships"} className="navbar-item">
        Starships
      </NavLink>
    </header>
  );
}

export {Header}