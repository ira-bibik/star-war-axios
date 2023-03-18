import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to={"/"}>People</NavLink>
        </li>
        <li>
          <NavLink to={"/planets"}>Planets</NavLink>
        </li>
        <li>
          <NavLink to={"/starships"}>Starships</NavLink>
        </li>
      </ul>
    </header>
  );
}

export {Header}