import React from 'react'
import logo from '../images/Simage.png';
import '../styles/NavBar.css'
import '../App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const[clas,setClass] = useState(false);
   

    const showNavToggle=()=>{

        setClass(true);
        // setNavTogg(true);      
      
    }

    const hideNavToggle =()=>{
        setClass(false);
        
    }
  return (
    <div className='nav'>
        <div className='marginp navcontain'>
             {/* logo */}
        <Link to='/' className='logo'>
            <img src={logo} alt='logo' ></img>
        </Link>

        <nav className='navitems'>
            <Link to='/'>Home</Link>
            <Link to='/Contact'>Contact</Link>
            <Link to='./Career'>Careers</Link>
            <Link to='/CreateBlog' className='specnav specnavb'>Create a blog</Link>
        </nav>

        {/* Smaller devices */}
        {/* Nav toggle */}

        
        { clas ?
            <div onClick={hideNavToggle} className='navtoggle1'>
                <span></span>     
            </div>
            :
            <div onClick={showNavToggle} className='navtoggle'>
            <span></span>
            <span></span>
            <span></span>
        </div> 
         }

        {clas && <div className='snav'>
            <nav className='snav-content'>
                <Link to='/'  onClick={hideNavToggle}>Home</Link>
                <Link to='/Contact'  onClick={hideNavToggle}>Contact</Link>
                <Link to='./Career'  onClick={hideNavToggle}>Careers</Link>
                <Link to='/CreateBlog' className='specnav specnavb'  onClick={hideNavToggle}>Create a blog</Link>
            </nav>
        </div>}
       
        </div>
       
    </div>
  )
}

export default NavBar