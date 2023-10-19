import React from 'react'
import './Components.css'
import { BsPersonCircle } from 'react-icons/bs'
import { RiShoppingCartFill } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'
// import {  MdSearch } from 'react-icons/md'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const isLogged = localStorage.getItem('recievedToken')
    return (
        <>
            <header>
                <Link to='/' className='shopit-logo-link'><h1>iSHOP</h1></Link>
                <div id='profile-cart-search'>
                    <div id='search'>
                     <input type='search' placeholder='SEARCH'></input>
                    {/* <button><MdSearch className='profile-cart-search-icon ' /></button> */}
                    </div>
                    {isLogged ? <NavLink to='/userprofile' id='user-profile'><BsPersonCircle className='profile-cart-search-icon' /><span>MY PROFILE</span></NavLink> : <NavLink to='/login' activeClassName='active' id='user-profile'><BsPersonCircle className='profile-cart-search-icon' /><span>LOGIN</span></NavLink>}
                    <NavLink to='/cart' id='user-cart'><RiShoppingCartFill className='profile-cart-search-icon' /><span>MY CART </span></NavLink>
                </div>
            </header>
            <nav className={isMobile ? "nav-links-mobile" : null} onClick={() => { setIsMobile(false) }}>
                {isLogged ? <NavLink to='/userprofile' className='login links mobile-link'><BsPersonCircle className='profile-cart-search-icon' />MY PROFILE</NavLink> : <NavLink to='/login' className='login links mobile-link'><BsPersonCircle className='profile-cart-search-icon' />LOGIN</NavLink>}
                <NavLink to='/cart' className='my-cart links mobile-link'><RiShoppingCartFill className='profile-cart-search-icon' /> MY CART</NavLink>
                <NavLink to='/' activeClassName='active' className='links mobile-link'>HOME</NavLink>
                <div className="dropdown">
                    <NavLink to='/store' activeClassName='active' className='links mobile-link'>STORE</NavLink>
                    <div className="dropdown-content">
                        <div className='dropdown-items'>
                        <div>
                                <h5>Fashion</h5>
                                <Link to='/fashion/mensfashion' className='dropdown-links'>Men's Fashion</Link>
                                <Link to='/fashion/womensfashion' className='dropdown-links'>Women's Fashion</Link>
                                <Link to='/fashion/kidsfashion' className='dropdown-links'>Kids Fashion </Link>
                            </div>


                            <div>
                                <h5>PHONES</h5>
                                <Link to='/phones' className='dropdown-links'>Android</Link>
                                <Link to='/phones' className='dropdown-links'>ios</Link>
                                <Link to='/phones' className='dropdown-links'>5G phones</Link>
                                <Link to='/phones' className='dropdown-links'>Accessories</Link>
                              
                            </div>
                            <div>
                                <h5>LAPTOPS</h5>
                                <Link to='/laptops' className='dropdown-links'>Mac Books</Link>
                                <Link to='/laptops' className='dropdown-links'>Gaming Laptops</Link>
                                <Link to='/laptops' className='dropdown-links'>Personal Laptops</Link>
                                <Link to='/laptops' className='dropdown-links'>Accessories</Link>
                            </div>
                            <div>

                                <h5>TELVISION</h5>
                                <Link to='/telvision' className='dropdown-links'>Smart</Link>
                                <Link to='/telvision' className='dropdown-links'>LED</Link>
                                <Link to='/telvision' className='dropdown-links'>Android</Link>
                                <Link to='/telvision' className='dropdown-links'>LCD</Link>
                            
                            </div>
                           
                           
                        </div>
                    </div>
                </div>
              <NavLink to='/fashion' activeclassname='active' className='links mobile-link'>FASHION</NavLink>
                <NavLink to='/phones' activeclassname='active' className='links mobile-link'>PHONES</NavLink>
                <NavLink to='/laptops' activeclassname='active' className='links mobile-link'>LAPTOPS</NavLink>
                <NavLink to='/telvision' activeclassname='active' className='links mobile-link'>TELVISION</NavLink>

            </nav>
            <button className='mobile-menu-icon' onClick={() => { setIsMobile(!isMobile) }}>
                {isMobile ? <RxCross2 /> : <GiHamburgerMenu />}
            </button>
        </>
    )
}

export default Navbar