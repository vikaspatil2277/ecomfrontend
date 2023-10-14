import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import westernUnionPaymentOption from '../Assets/Home Page/western-union-payment-option.png'
import mastercardPaymentOption from '../Assets/Home Page/master-card-payment-option.png'
import paypalPaymentOption from '../Assets/Home Page/paypal-payment-option.png'
import visaPaymentOption from '../Assets/Home Page/visa-payment-option.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='footer-upper'>
                <div className='about-shopit'>
                    <div>
                        <h1>SHOPIT</h1>
                        <p>Shop 'til you drop with Shopit ! <br /> Get it all with Shopit <br /> the ultimate e-commerce destination</p>
                    </div>
                    <div>
                        <h5>Follow us</h5>
                        <p>Connect with us on social media <br /> and stay up-to-date on the <br />latest trends and deals</p>
                        <AiFillFacebook id='facebook-logo' />
                        <FaTwitter id='twitter-logo' />
                    </div>
                    <div>
                        <h5>Contact Us</h5>
                        <p>We're here to help you 24/7 <br /> Get in touch with us for any <br /> questions or concerns</p>
                    </div>
                </div>
            </div>
            <hr className='footer-hr' />
            <div className='footer-down'>
                <div>
                    <h5>SHOP BY CATEGORY</h5>
                    <Link to='/electronics' className='footer-links'>Electronics</Link>
                    <Link to='/fashion' className='footer-links'>Fashion</Link>
                    <Link to='/homeandkitchen' className='footer-links'>Home and Kitchen</Link>
                    <Link to='/healthandpersonalcare' className='footer-links'>Health and Personal Care</Link>
                    <Link to='/sports' className='footer-links'>Sports</Link>
                    <Link to='/books' className='footer-links'>Books</Link>
                </div>
                <div>
                    <h5>ABOUT US</h5>
                    <Link to='/' className='footer-links'>About</Link>
                    <Link to='/' className='footer-links'>Terms and Conditions</Link>
                    <Link to='/' className='footer-links'>Privacy Policy</Link>
                    <Link to='/' className='footer-links'>Careers</Link>
                    <Link to='/' className='footer-links'>Store Locator</Link>
                </div>
                <div>
                    <h5>HELP</h5>
                    <Link to='/userprofile' className='footer-links'>My Account</Link>
                    <Link to='/' className='footer-links'>Delivery</Link>
                    <Link to='/' className='footer-links'>Track an Order</Link>
                    <Link to='/' className='footer-links'>Returns</Link>
                </div>
                <div>
                    <h5>CONTACT</h5>
                    <h6>EMAIL</h6>
                    <p>vikaspatill@gmail.com</p>
                    <h6>TELEPHONE</h6>
                    <p>7038035577</p>
                </div>
            </div>
            <hr />
            <div className='payment-options'>
                <img src={westernUnionPaymentOption} alt='western-union-payment-option'></img>
                <img src={mastercardPaymentOption} alt='mastercard-payment-option'></img>
                <img src={paypalPaymentOption} alt='paypal-payment-option'></img>
                <img src={visaPaymentOption} alt='visa-payment-option'></img>
            </div>
        </>
    )
}

export default Footer