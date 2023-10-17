import React, { useState } from 'react'
import "../index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Store from './Store'
import Television from '../ProductCategories/Telvision'
import PageNotFound from './PageNotFound'
import UserProfile from './UserProfile'
import Cart from './Cart'
import { Login } from '../RegisterLogin/Login'
import Register from '../RegisterLogin/Register'

import BestSellerPhones from '../BestSellers/BestSellerPhones'
import BestSellerLaptops from '../BestSellers/BestSellerLaptops'
import BestSellerFashion from '../BestSellers/BestSellerFashion'
import BestSellerSports from '../BestSellers/BestSellerTelvision'

import MensFashion from '../ProductSubCategories/MensFashion'
import WomensFashion from '../ProductSubCategories/WomensFashion'
import KidsFashion from '../ProductSubCategories/KidsFashion'

import DetailDescription from '../ProductCategories/DetailDescription'
import Laptops from '../ProductCategories/Laptops'
import Fashion from '../ProductCategories/Fashion'
import Phones from '../ProductCategories/Phones'


const RoutesFile = () => {
  const [cart, setCart] = useState([]);
  console.log(cart)
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
    alert('Item Added to cart successfully !!')
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart cart={cart} count={cart.length} />} />
          <Route path='/' element={<Home count={cart.length} />} />
          <Route path='/store' element={<Store addToCart={addToCart} count={cart.length} />} />


          <Route path='/fashion' element={<Fashion addToCart={addToCart} count={cart.length} />} />
          <Route path='/fashion/mensfashion' element={<MensFashion addToCart={addToCart} count={cart.length} />} />
          <Route path='/fashion/womensfashion' element={<WomensFashion addToCart={addToCart} count={cart.length} />} />
          <Route path='/fashion/kidsfashion' element={<KidsFashion addToCart={addToCart} count={cart.length} />} /> 

          <Route path='/phones' element={<Phones addToCart={addToCart} count={cart.length} />} />
          <Route path='/laptops' element={<Laptops addToCart={addToCart} count={cart.length} />} />
          <Route path='/telvision' element={<Television addToCart={addToCart} count={cart.length} />} />






          <Route path='/all' element={<Home addToCart={addToCart} count={cart.length} />} />
          <Route path='/bestphones' element={<BestSellerPhones addToCart={addToCart} count={cart.length} />} />
          <Route path='/bestlaptops' element={<BestSellerLaptops addToCart={addToCart} count={cart.length} />} />
          <Route path='/besttv' element={<BestSellerSports addToCart={addToCart} count={cart.length} />} />
          <Route path='/bestfashion' element={<BestSellerFashion addToCart={addToCart} count={cart.length} />} />
          <Route path="/detaildescription/:id" element={<DetailDescription addToCart={addToCart} count={cart.length} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default RoutesFile