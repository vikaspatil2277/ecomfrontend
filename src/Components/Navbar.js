import React from 'react'
import './Components.css'
import { BsPersonCircle } from 'react-icons/bs'
import { RiShoppingCartFill } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const isLogged = localStorage.getItem('recievedToken')
    return (
        <>
            <header>
                <Link to='/' className='shopit-logo-link'><h1>MYSHOP</h1></Link>
                <div id='profile-cart-search'>
                    {/* <div id='search'>
                        <ImSearch className='profile-cart-search-icon ' /><input type='search' placeholder='SEARCH SHOPIT'></input>
                    </div> */}
                    {isLogged ? <NavLink to='/userprofile' id='user-profile'><BsPersonCircle className='profile-cart-search-icon' /><span>MY PROFILE</span></NavLink> : <NavLink to='/login' activeClassName='active' id='user-profile'><BsPersonCircle className='profile-cart-search-icon' /><span>LOGIN</span></NavLink>}
                    <NavLink to='/cart' id='user-cart'><RiShoppingCartFill className='profile-cart-search-icon' /><span>MY CART</span></NavLink>
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
                                <h5>Electronics</h5>
                                <Link to='/electronics/cellphonesandaccessories' className='dropdown-links'>Cell Phones and Accessories</Link>
                                <Link to='/electronics/computersandaccessories' className='dropdown-links'>Computers and Accessories</Link>
                                <Link to='/electronics/headphones' className='dropdown-links'>Headphones</Link>
                                <Link to='/electronics/televisionandvideo' className='dropdown-links'>Television and Video</Link>
                                <Link to='/electronics/smarthome' className='dropdown-links'>Smart Home</Link>
                            </div>
                            <div>
                                <h5>Fashion</h5>
                                <Link to='/fashion/mensfashion' className='dropdown-links'>Men's Fashion</Link>
                                <Link to='/fashion/womensfashion' className='dropdown-links'>Women's Fashion</Link>
                                <Link to='/fashion/kidsfashion' className='dropdown-links'>Kids Fashion</Link>
                            </div>
                            <div>
                                <h5>Home and Kitchen</h5>
                                <Link to='/homeandkitchen/kitchenanddining' className='dropdown-links'>Kitchen and Dining</Link>
                                <Link to='/homeandkitchen/furniture' className='dropdown-links'>Furniture</Link>
                                <Link to='/homeandkitchen/homedecor' className='dropdown-links'>Home Decor</Link>
                                <Link to='/homeandkitchen/storageandorganization' className='dropdown-links'>Storage and Organization</Link>
                            </div>
                            <div>
                                <h5>Health and Personal Care</h5>
                                <Link to='/healthandpersonalcare/householdsupplies' className='dropdown-links'>Household Supplies</Link>
                                <Link to='/healthandpersonalcare/beautytoolsandaccessories' className='dropdown-links'>Beauty Tools and Accessories</Link>
                                <Link to='/healthandpersonalcare/dietandnutrition' className='dropdown-links'>Diet and Nutrition</Link>
                                <Link to='/healthandpersonalcare/personalcareappliances' className='dropdown-links'>Personal Care Appliances</Link>
                            </div>
                            <div>
                                <h5>Sports</h5>
                                <Link to='/sports/cricket' className='dropdown-links'>Cricket</Link>
                                <Link to='/sports/badminton' className='dropdown-links'>Badminton</Link>
                                <Link to='/sports/football' className='dropdown-links'>Football</Link>
                                <Link to='/sports/yoga' className='dropdown-links'>Yoga</Link>
                                <Link to='/sports/campingandhiking' className='dropdown-links'>Camping and Hiking</Link>
                                <Link to='/sports/strengthtraining' className='dropdown-links'>Strength Training</Link>
                            </div>
                            <div>
                                <h5>Books</h5>
                                <Link to='/books/fictionbooks' className='dropdown-links'>Fiction Books</Link>
                                <Link to='/books/editorscorner' className='dropdown-links'>Editor's Corner</Link>
                                <Link to='/books/indianlanguagebooks' className='dropdown-links'>Indian Language Books</Link>
                                <Link to='/books/schooltextbooks' className='dropdown-links'>School Textbooks</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to='/electronics' activeClassName='active' className='links mobile-link'>ELECTRONICS</NavLink>
                <NavLink to='/fashion' activeClassName='active' className='links mobile-link'>FASHION</NavLink>
                <NavLink to='/homeandkitchen' activeClassName='active' className='links mobile-link'>HOME AND KITCHEN</NavLink>
                <NavLink to='/healthandpersonalcare' activeClassName='active' className='links mobile-link'>HEALTH AND PERSONAL CARE</NavLink>
                <NavLink to='/sports' activeClassName='active' className='links mobile-link'>SPORTS</NavLink>
                <NavLink to='/books' activeClassName='active' className='links mobile-link'>BOOKS</NavLink>
            </nav>
            <button className='mobile-menu-icon' onClick={() => { setIsMobile(!isMobile) }}>
                {isMobile ? <RxCross2 /> : <GiHamburgerMenu />}
            </button>
        </>
    )
}

export default Navbar