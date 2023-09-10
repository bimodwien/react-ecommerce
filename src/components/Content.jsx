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

        <h4>Our Categories</h4>

        {dataFetch.map((data) => {
            return <div>
                {data.title}
            </div>
        })}
    </>
  )
}

export default Content