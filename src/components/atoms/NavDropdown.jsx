import React from 'react'
import { Link } from 'react-router-dom'
import {FaChevronDown} from "react-icons/fa"

const NavDropdown = (props) => {
  return (
    <div className="group">
    <Link to ="{props.path}" className='flex items-center gap-3'>{props.navLink}<FaChevronDown/> </Link>
    <ul className="hidden group-hover:flex flex-col gap-3 absolute pt-3">
        {props.links.map((link, index) => (
            <li key={index} className="hover:bg-yellow-400">
            <Link to={link.path}>{link.label}</Link>
        </li>
        ))}
    </ul>
</div>
  )
}

export default NavDropdown