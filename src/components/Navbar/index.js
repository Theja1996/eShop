import React from 'react'
import {Nav, NavLink, NavIcon,Bars} from './NavbarElements'

const Navbar = () => {
    return (
        <div>
           <Nav>
               <NavLink to='/'>Pizza</NavLink>
             
< NavIcon >  menu<Bars /></ NavIcon>

           </Nav>
        </div>
    )
}

export default Navbar
