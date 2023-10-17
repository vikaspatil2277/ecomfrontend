import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Components.css'
import { BiHomeAlt2 } from 'react-icons/bi'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'

const UserProfile = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <>
            <div className='user-profile-page'>
                <div className='user-profile-page-heading'>
                    <h1>ISHOP</h1>
                    <h5> WELCOME TO YOUR PROFILE.</h5>
                </div>
                <div className='user-profile-page-go-to-homepage'>
                    <BiHomeAlt2 className='user-profile-page-home-icon' />
                    <Link to='/' className='user-profile-page-link'>GO TO  HOMEPAGE</Link>
                </div>
                <div className='user-profile-page-cart'>
                    <RiShoppingCart2Line className='user-profile-page-cart-icon' />
                    <Link to='/cart' className='user-profile-page-link'>My CART</Link>
                </div>
                <div className='user-profile-page-logout'>
                    <FiLogOut className='user-profile-page-logout-icon' onClick={logout} />
                    <Link to='/' className='user-profile-page-link' onClick={logout}>LOGOUT</Link>
                </div>
            </div>
        </>
    )
}

export default UserProfile