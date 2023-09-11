import React from 'react'
import useFetch from '../helper/hooks/index'
import './content.css'

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
                return <div className='content-cards'>
                    <img src={data.image} alt="" />
                    <div>{data.title}</div>
                    <div>{data.rating.rate}</div>
                    <div>{data.price}</div>
                    <div>
                        <button>Add to Favorite</button>
                        <button>Add to Chart</button>
                    </div>
                </div>
            })}
        </div>
    </>
  )
}

export default Content