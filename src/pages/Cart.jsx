import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'

const Cart = () => {

  const initialDataCart = JSON.parse(localStorage.getItem('cart')) || []
  const [dataCart, setDataCart] = useState(initialDataCart)

  function handleDelete(id) {
    const updatedCart = dataCart.filter((item) => {
      return item.id !== id;
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setDataCart(updatedCart)
  }
  
  return (
    <>
      <Navbar/>
      {dataCart.map((data) => {
        return (
          <div key={data.id}>
            <div>{data.title}</div>
            <div>{data.qty}</div>
            <button onClick={() => handleDelete(data.id)}>Delete</button>
          </div>
        )
      })}

    </>
  )
}

export default Cart