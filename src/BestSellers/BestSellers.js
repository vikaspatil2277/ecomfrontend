import React from 'react'
import { NavLink } from 'react-router-dom'

const BestSellers = () => {
    return (
        <>
            <NavLink to='/all' activeClassName='active' className='links'>ALL</NavLink>
            <NavLink to='/bestphones' activeClassName='active' className='links'>PHONES</NavLink>
            <NavLink to='/bestlaptops' activeClassName='active' className='links'>LAPTOPS</NavLink>
            <NavLink to='/besttv' activeClassName='active' className='links'>TELEVISION</NavLink>
            <NavLink to='/bestfashion' activeClassName='active' className='links'>FASHION</NavLink>
        </>
    )
}

export default BestSellers