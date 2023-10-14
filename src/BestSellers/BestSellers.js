import React from 'react'
import { NavLink } from 'react-router-dom'

const BestSellers = () => {
    return (
        <>
            <NavLink to='/all/bestsellers' activeClassName='active' className='links'>ALL</NavLink>
            <NavLink to='/electronics/bestsellers' activeClassName='active' className='links'>ELECTRONICS</NavLink>
            <NavLink to='/fashion/bestsellers' activeClassName='active' className='links'>FASHION</NavLink>
            <NavLink to='/sports/bestsellers' activeClassName='active' className='links'>SPORTS</NavLink>
            <NavLink to='/books/bestsellers' activeClassName='active' className='links'>BOOKS</NavLink>
        </>
    )
}

export default BestSellers