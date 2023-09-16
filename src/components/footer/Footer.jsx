import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <div className='footer-utama'>
            <div className='footer-newsletter'>
                <div className='footer-newsletter-letter'>
                    <div className='footer-newsletter-subscribed'>Subscribed newsletter to get update</div>
                    <div className='footer-newletter-inform'>We are inform you that if you get any discount</div>
                </div>
                <div className='footer-newsletter-form'>
                    <input className='footer-form-input' type="text" placeholder='Enter your email address here...'/>
                    <button className='footer-form-button'>Subscribed</button>
                </div>
            </div>
            <div>
                <p>ini footer selanjutnya</p>
            </div>
        </div>
    </>
  )
}

export default Footer