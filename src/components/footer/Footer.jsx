import React from 'react'
import './footer.css'
import { FaFacebook, FaPinterest, FaTwitter, FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className='footer-utama'>
            <div className='footer-newsletter'>
                <div className='footer-newsletter-letter'>
                    <div className='footer-newsletter-subscribed'>Subscribed newsletter to get update</div>
                    <div className='footer-newsletter-inform'>We will inform you that if you get any discount</div>
                </div>
                <div className='footer-newsletter-form'>
                    <input className='footer-form-input' type="text" placeholder='Enter your email address here...'/>
                    <button className='footer-form-button'>Subscribed</button>
                </div>
            </div>
            <div className='footer-information'>
                <div className='footer-information-section'>
                    <div className='footer-information-title'>NiceCommerce</div>
                    <div className='footer-information-about'>Address: Jakarta Selatan, 12220</div>
                    <div className='footer-information-about'>Phone: +62 812 8252 5002</div>
                    <div className='footer-information-about'>Email: bimodwien2@gmail.com </div>
                    <div className='footer-information-about'>Web: linkedin.com/bimodwien</div>
                    <div className='footer-information-about'>Get in Touch</div>
                    <div className='footer-brand-icons'>
                        <div className='footer-brand-icons-button'><FaFacebook/></div>
                        <div className='footer-brand-icons-button'><FaPinterest/></div>
                        <div className='footer-brand-icons-button'><FaTwitter/></div>
                        <div className='footer-brand-icons-button'><FaInstagramSquare/></div>
                    </div>
                </div>
                <div className='footer-information-section'>
                    <div className='footer-information-title'>About</div>
                    <div className='footer-information-content'>About us</div>
                    <div className='footer-information-content'>Our Offer</div>
                    <div className='footer-information-content'>Office</div>
                    <div className='footer-information-content'>Contact</div>
                    <div className='footer-information-content'>Help & Faq</div>
                </div>
                <div className='footer-information-section'>
                    <div className='footer-information-title'>Service</div>
                    <div className='footer-information-content'>Product</div>
                    <div className='footer-information-content'>Shop Now</div>
                    <div className='footer-information-content'>Privacy Protection</div>
                    <div className='footer-information-content'>Safe Payment</div>
                    <div className='footer-information-content'>Privacy Policy</div>
                </div>
                <div className='footer-information-section'>
                    <div className='footer-information-title'>Information</div>
                    <div className='footer-information-content'>Delivery Transaction</div>
                    <div className='footer-information-content'>Terms & Condition</div>
                    <div className='footer-information-content'>Brands</div>
                    <div className='footer-information-content'>Affliate</div>
                    <div className='footer-information-content'>Sitemap</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer