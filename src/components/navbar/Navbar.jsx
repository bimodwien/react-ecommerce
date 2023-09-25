import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { BsHeartFill } from 'react-icons/bs'
import { FaCartShopping } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <>
      <div className='navbar-utama'>
        <div className='navbar-support'>Support +62 1123 456</div>
        <Link to={"/"} className='navbar-title'>NiceCommerce</Link>
        <div className='navbar-icons'>
          <Link to={"/favorite"} className='navbar-icons-search'><BsHeartFill/></Link>
          <div className='navbar-icons-cart'><FaCartShopping/></div>
        </div>
        <button className='navbar-login'>Login</button>
      </div>    
    </>
  )
}

export default Navbar