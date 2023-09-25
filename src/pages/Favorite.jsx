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
                {favData.map((data) => {
                return (
                    <div className='favorite-card'>
                        <div>
                            <img src={data.image} alt="" />
                        </div>
                        <div>
                            <div>{data.title}</div>
                            <div>{data.rating.rate}</div>
                            <div>{data.price}</div>
                        </div>
                        <div>
                            <button><IoCartOutline/> Add to Cart</button>
                            <button>delete</button>
                        </div>
                    </div> 
                )   
                    
                })}
            </div>        
        </div>
        
    </>
  )
}

export default Favorite