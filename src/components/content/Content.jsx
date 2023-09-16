import React from 'react'
import useFetch from '../../helper/hooks/index'
import '../content/content.css'
import { IoCartOutline } from 'react-icons/io5'
import { BsHeartFill } from 'react-icons/bs'

const Content = () => {
    const dataFetch = useFetch({
        url : `https://fakestoreapi.com/products`,
        defaultData : [],
    });

  return (
    <>
        <div className='content-banner'>
            <div className='content-title'>Grab up to 50% off on selected items</div>
            <div className='content-image'>gambar</div>
        </div>
        <div className='content-menu'>
            <div className='content-categories'>Our Categories</div>
            <div className='content-button'>
                <button>Electronics</button>
                <button>Jewelery</button>
                <button>Men's Clothing</button>
                <button>Women's Clothing</button>
            </div>
        </div>
        <div className='content-field'>
            {dataFetch.map((data) => {
                return <div key={data.id} className='content-cards'>
                    <div className='content-cards-image'>
                        <img src={data.image} alt="" />
                    </div>
                    <div className='content-cards-title'>{data.title}</div>
                    <div className='content-cards-rating'>{data.rating.rate}</div>
                    <div className='content-cards-price'>${data.price}</div>
                    <div className='content-cards-button'>
                        <button className='content-cards-fav'> <BsHeartFill/> Add to Favorite</button>
                        <button className='content-cards-cart'> <IoCartOutline/> Add to Cart</button>
                    </div>
                </div>
            })}
        </div>
    </>
  )
}

export default Content