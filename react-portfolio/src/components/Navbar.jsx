import React from 'react'
import '../styles/Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import ReorderIcon from "@material-ui/icons/Reorder";
import { useState } from 'react';
import { useEffect } from 'react';
function Navbar() {
    const [expandNavbar,setexpandNavbar]=useState(false);
    const location=useLocation();
    useEffect(()=>{
       setexpandNavbar(false)
    },[location])
    return (
        <div className="navbar" id={expandNavbar? "open":"close"}>
            <div className='toggleButton'>
                <button onClick={()=>{
                    setexpandNavbar((prev)=>!prev)
                }}><ReorderIcon/></button>
            </div>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/projects" >Project</Link>
                <Link to="/experience" >Experience</Link>
            </div>
        </div>
    )
}

export default Navbar