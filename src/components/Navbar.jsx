import React from 'react'
import './navbar.css'
import { BsHeartFill } from 'react-icons/bs'
import { FaCartShopping } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <>
      <div className='navbar-utama'>
        <div className='navbar-support'>Support +62 1123 456</div>
        <div className='navbar-title'>NiceCommerce</div>
        <div className='navbar-icons'>
          <div className='navbar-icons-search'><BsHeartFill/></div>
          <div className='navbar-icons-cart'><FaCartShopping/></div>
        </div>
        <button className='navbar-login'>Login</button>
      </div>    
    </>
  )
}

export default Navbar