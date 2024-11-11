import './Navbar.css'
import {NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <header>
        <h3>Nuestro Blog</h3>
        <nav>
            <NavLink className={({isActive}) => isActive ?'activeLink' :null} 
                     to="/">Principal</NavLink>
            <NavLink className={({isActive}) => isActive ?'activeLink' :null}
                     to="/about">Nosotros</NavLink>
            <NavLink className={({isActive}) => isActive ?'activeLink' :null}
                     to="/blog">Blog</NavLink>
        </nav>
    </header>
  )
}

