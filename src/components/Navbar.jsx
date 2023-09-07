import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='navbar-utama'>
        <div className='navbar-support'>Support +62 1123 456</div>
        <div className='navbar-title'>FakeCommerce</div>
        <div className='navbar-icons'>
          <div>1</div>
          <div>2</div>
        </div>
        <button className='navbar-login'>Login</button>
      </div>    
    </>
  )
}

export default Navbar