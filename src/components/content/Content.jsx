import React from 'react'
import useFetch from '../../helper/hooks/index'
import '../content/content.css'
import { IoCartOutline } from 'react-icons/io5'
import { BsHeartFill, BsHeart } from 'react-icons/bs'

const Content = () => {
    const {result: dataFetch, setResult: favHeart} = useFetch({
        url : `https://fakestoreapi.com/products`,
        defaultData : [],
    });

    let isFav = false;
    function handleLike(id) {
        const fillFavorite = dataFetch.map((data) => {
            if (data.id === id){
                return {...data, isFav: !data.isFav}
            };
            return data;
        })
        favHeart(fillFavorite);
    }

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
                    <button className='content-cards-fav' onClick={() => handleLike(data.id)}>{isFav ? <BsHeartFill/> : <BsHeart/>}</button>
                    <div className='content-cards-wrapping'>
                        <div className='content-cards-title'>{data.title}</div>
                        <div className='content-cards-rating'>{data.rating.rate}</div>
                        <div className='content-cards-price'>${data.price}</div>      
                    </div>
                    <div className='content-cards-button'>
                        <button className='content-cards-cart'> <IoCartOutline/> Add to Cart</button>                
                    </div>         
                </div>
            })}
        </div>
    </>
  )
}

export default Content