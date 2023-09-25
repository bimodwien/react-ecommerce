import React from 'react'
import { useProduct } from '../../helper/hooks'
import '../content/content.css'
import { IoCartOutline } from 'react-icons/io5'
import { BsHeartFill, BsHeart } from 'react-icons/bs'

const Content = () => {

    const {dataFetch, setFetch} = useProduct()

    function handleLike({id, isFav}) {
        const fillFavorite = dataFetch.map((data) => {
            if (data.id === id){         
                let rawDataFav = JSON.parse(localStorage.getItem('fav')) || []
                if(isFav) {
                    rawDataFav = rawDataFav.filter((item) => {
                        return item.id !== id;
                    })
                }
                const actualData = [...rawDataFav]
                if(!isFav) {
                    actualData.push({...data, isFav: true})
                }
                localStorage.setItem('fav', JSON.stringify(actualData));
                return {...data, isFav: !data.isFav}
            };
            return data;
        })
        setFetch(fillFavorite);
    }

    function handleCart(id) {
        const data = dataFetch.find((product) =>{
            return product.id === id
        })
        let isData = false
        const newCartData = {...data, qty:1}
        const rawDataCart = (JSON.parse(localStorage.getItem('cart')) || []).map((cartData) => {
            if (cartData.id === id) {
                isData = true
                return {...cartData, qty: cartData.qty + 1}
            }
            return cartData;
        });
        const actualCart = [...rawDataCart]
        if (!isData) {
            actualCart.push(newCartData);
        }
        localStorage.setItem('cart', JSON.stringify(actualCart))
        alert('Berhasil ditambah ke Cart')
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
                    <button className='content-cards-fav' onClick={() => handleLike(data)}>{data.isFav ? <BsHeartFill/> : <BsHeart/>}</button>
                    <div className='content-cards-wrapping'>
                        <div className='content-cards-title'>{data.title}</div>
                        <div className='content-cards-rating'>{data.rating.rate}</div>
                        <div className='content-cards-price'>${data.price}</div>      
                    </div>
                    <div className='content-cards-button'>
                        <button className='content-cards-cart' onClick={() => handleCart(data.id)}> <IoCartOutline/> Add to Cart</button>                
                    </div>         
                </div>
            })}
        </div>
    </>
  )
}

export default Content