import { useState } from "react"
import { Link } from "react-router-dom"
import {FaChevronDown} from "react-icons/fa"
import NavDropdown from "../atoms/NavDropdown.jsx"
const Header = () => {
    const destinationLink = [
        {path: "destination/reccomendation", label: "Reccomendations"},
        {path: "destination/beach-club", label: "Beach & Club"},
        {path: "destination/mountain", label: "Mountains"},
        {path: "destination/parks", label: "Parks"},
        {path: "destination/lakes", label: "Lakes"},
        {path: "destination/temples", label: "Temples"},
    ];
    const staycationLink = [
        {path: "destination/reccomendation", label: "Reccomendations"},
        {path: "destination/beach-club", label: "Beach & Club"},
        {path: "destination/mountain", label: "Mountains"},
        {path: "destination/parks", label: "Parks"},
        {path: "destination/lakes", label: "Lakes"},
        {path: "destination/temples", label: "Temples"},
    ];
    const FoodDrinksLink = [
        {path: "destination/reccomendation", label: "Reccomendations"},
        {path: "destination/beach-club", label: "Beach & Club"},
        {path: "destination/mountain", label: "Mountains"},
        {path: "destination/parks", label: "Parks"},
        {path: "destination/lakes", label: "Lakes"},
        {path: "destination/temples", label: "Temples"},
    ];
  return (
   <header className="flex justify-between text-white mx-16 my-6 fixed right-0 left-0 top-0">
    <h1 className="font-Logo text-3xl font-medium">BaliWoosh</h1>
    <div className="flex gap-5 py-2 px-6 rounded-box">
        <Link to ="/">Home</Link>
        <NavDropdown  
            path="/destination" 
            link= "Destination"
        />
        <NavDropdown 
            path="/staycation" 
            link= "Staycation"
        />
        <NavDropdown 
            path="/foods-drinks" 
            link= "Foods and Drinks"
        />
        <NavDropdown 
            path="/culture" 
            link= "Culture"
        />
    </div>
    </header>
  )
}

export default Header