import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { IoCartOutline } from 'react-icons/io5'
import './favorite.css'

const Favorite = () => {

    const favData = JSON.parse(localStorage.getItem('fav')) || []

  return (
    <>
        <Navbar/>
        <div className='favorite-content'>
            <h3>Our Wishlist</h3>
            <div className='favorite-field'>
                <div className='favorite-card'>
                    <div>
                        <img src={favData.image} alt="" />
                    </div>
                    <div>
                        <div>{favData.title}</div>
                        <div>{favData.rating.rate}</div>
                        <div>{favData.price}</div>
                    </div>
                    <div>
                        <button><IoCartOutline/> Add to Cart</button>
                    </div>
                </div>    
            </div>        
        </div>
        
    </>
  )
}

export default Favorite