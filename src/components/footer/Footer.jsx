import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <div className='footer-utama'>
            <div className='footer-newsletter'>
                <div className='footer-newsletter-letter'>
                    <div className='footer-newsletter-subscribed'>Subscribed newsletter to get update</div>
                    <div className='footer-newsletter-inform'>We are inform you that if you get any discount</div>
                </div>
                <div className='footer-newsletter-form'>
                    <input className='footer-form-input' type="text" placeholder='Enter your email address here...'/>
                    <button className='footer-form-button'>Subscribed</button>
                </div>
            </div>
            <div className='footer-information'>
                <div>
                    <div>NiceCommerce</div>
                    <div>Address: Jakarta Selatan, 12220</div>
                    <div>Phone: +62 812 8252 5002</div>
                    <div>Email: bimodwien2@gmail.com </div>
                    <div>Web: bimoprabowo.com</div>
                    <div>Get in Touch</div>
                    <div className='footer-brand-icons'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                </div>
                <div>
                    <div>About</div>
                    <div>About us</div>
                    <div>Our Offer</div>
                    <div>Office</div>
                    <div>Contact</div>
                    <div>Help & Faq</div>
                </div>
                <div>
                    <div>Service</div>
                    <div>Product</div>
                    <div>Shop Now</div>
                    <div>Privacy Protection</div>
                    <div>Safe Payment</div>
                    <div>Privacy Policy</div>
                </div>
                <div>
                    <div>Information</div>
                    <div>Delivery Transaction</div>
                    <div>Terms & Condition</div>
                    <div>Brands</div>
                    <div>Affliate</div>
                    <div>Sitemap</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer