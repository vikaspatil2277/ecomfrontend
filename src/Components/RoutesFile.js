import React, { useState } from 'react'
import "../index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Store from './Store'
import Electronics from '../ProductCategories/Electronics'
import Fashion from '../ProductCategories/Fashion'
import HomeAndKitchen from '../ProductCategories/HomeAndKitchen'
import HealthAndPersonalCare from '../ProductCategories/HealthAndPersonalCare'
import Sports from '../ProductCategories/Sports'
import Books from '../ProductCategories/Books'
import PageNotFound from './PageNotFound'
import UserProfile from './UserProfile'
import Cart from './Cart'
import { Login } from '../RegisterLogin/Login'
import Register from '../RegisterLogin/Register'
import BestSellerAll from '../BestSellers/BestSellerAll'
import BestSellerElectronics from '../BestSellers/BestSellerElectronics'
import BestSellerFashion from '../BestSellers/BestSellerFashion'
import BestSellerSports from '../BestSellers/BestSellerSports'
import BestSellerBooks from '../BestSellers/BestSellerBooks'
import CellPhonesAndAccessories from '../ProductSubCategories/CellPhonesAndAccessories'
import ComputersAndAccessories from '../ProductSubCategories/ComputersAndAccessories'
import Headphones from '../ProductSubCategories/Headphones'
import TelevisionAndVideo from '../ProductSubCategories/TelevisionAndVideo'
import SmartHome from '../ProductSubCategories/SmartHome'
import MensFashion from '../ProductSubCategories/MensFashion'
import WomensFashion from '../ProductSubCategories/WomensFashion'
import KidsFashion from '../ProductSubCategories/KidsFashion'
import KitchenAndDining from '../ProductSubCategories/KitchenAndDining'
import Furniture from '../ProductSubCategories/Furniture'
import HomeDecor from '../ProductSubCategories/HomeDecor'
import StorageAndOrganization from '../ProductSubCategories/StorageAndOrganization'
import HouseholdSupplies from '../ProductSubCategories/HouseholdSupplies'
import BeautyToolsAndAccessories from '../ProductSubCategories/BeautyToolsAndAccessories'
import DietAndNutrition from '../ProductSubCategories/DietAndNutrition'
import PersonalCareAppliances from '../ProductSubCategories/PersonalCareAppliances'
import Cricket from '../ProductSubCategories/Cricket'
import Badminton from '../ProductSubCategories/Badminton'
import Football from '../ProductSubCategories/Football'
import Yoga from '../ProductSubCategories/Yoga'
import CampingAndHiking from '../ProductSubCategories/CampingAndHiking'
import StrengthTraining from '../ProductSubCategories/StrengthTraining'
import FictionBooks from '../ProductSubCategories/FictionBooks'
import EditorsCorner from '../ProductSubCategories/EditorsCorner'
import IndianLanguageBooks from '../ProductSubCategories/IndianLanguageBooks'
import SchoolTextbooks from '../ProductSubCategories/SchoolTextbooks'
import DetailDescription from '../ProductCategories/DetailDescription'


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
          <Route path='/electronics' element={<Electronics addToCart={addToCart} count={cart.length} />} />
          <Route path='/fashion' element={<Fashion addToCart={addToCart} count={cart.length} />} />
          <Route path='/homeandkitchen' element={<HomeAndKitchen addToCart={addToCart} count={cart.length} />} />
          <Route path='/healthandpersonalcare' element={<HealthAndPersonalCare addToCart={addToCart} count={cart.length} />} />
          <Route path='/sports' element={<Sports addToCart={addToCart} count={cart.length} />} />
          <Route path='/books' element={<Books addToCart={addToCart} count={cart.length} />} />
          <Route path='/electronics/cellphonesandaccessories' element={<CellPhonesAndAccessories addToCart={addToCart} count={cart.length} />} />
          <Route path='/electronics/computersandaccessories' element={<ComputersAndAccessories addToCart={addToCart} count={cart.length} />} />
          <Route path='/electronics/headphones' element={<Headphones addToCart={addToCart} count={cart.length} />} />
          <Route path='/electronics/televisionandvideo' element={<TelevisionAndVideo addToCart={addToCart} count={cart.length} />} />
          <Route path='/electronics/smarthome' element={<SmartHome addToCart={addToCart} count={cart.length} />} />
          <Route path='/fashion/mensfashion' element={<MensFashion addToCart={addToCart} count={cart.length} />} />
          <Route path='/fashion/womensfashion' element={<WomensFashion addToCart={addToCart} count={cart.length} />} />
          <Route path='/fashion/kidsfashion' element={<KidsFashion addToCart={addToCart} count={cart.length} />} />
          <Route path='/homeandkitchen/kitchenanddining' element={<KitchenAndDining addToCart={addToCart} count={cart.length} />} />
          <Route path='/homeandkitchen/furniture' element={<Furniture addToCart={addToCart} count={cart.length} />} />
          <Route path='/homeandkitchen/homedecor' element={<HomeDecor addToCart={addToCart} count={cart.length} />} />
          <Route path='/homeandkitchen/storageandorganization' element={<StorageAndOrganization addToCart={addToCart} count={cart.length} />} />
          <Route path='/healthandpersonalcare/householdsupplies' element={<HouseholdSupplies addToCart={addToCart} count={cart.length} />} />
          <Route path='/healthandpersonalcare/beautytoolsandaccessories' element={<BeautyToolsAndAccessories addToCart={addToCart} count={cart.length} />} />
          <Route path='/healthandpersonalcare/dietandnutrition' element={<DietAndNutrition addToCart={addToCart} count={cart.length} />} />
          <Route path='/healthandpersonalcare/personalcareappliances' element={<PersonalCareAppliances addToCart={addToCart} count={cart.length} />} />
          <Route path='/sports/cricket' element={<Cricket addToCart={addToCart} count={cart.length} />} />
          <Route path='/sports/badminton' element={<Badminton addToCart={addToCart} count={cart.length} />} />
          <Route path='/sports/football' element={<Football addToCart={addToCart} count={cart.length} />} />
          <Route path='/sports/yoga' element={<Yoga addToCart={addToCart} count={cart.length} />} />
          <Route path='/sports/campingandhiking' element={<CampingAndHiking addToCart={addToCart} count={cart.length} />} />
          <Route path='/sports/strengthtraining' element={<StrengthTraining addToCart={addToCart} count={cart.length} />} />
          <Route path='/books/fictionbooks' element={<FictionBooks addToCart={addToCart} count={cart.length} />} />
          <Route path='/books/editorscorner' element={<EditorsCorner addToCart={addToCart} count={cart.length} />} />
          <Route path='/books/indianlanguagebooks' element={<IndianLanguageBooks addToCart={addToCart} count={cart.length} />} />
          <Route path='/books/schooltextbooks' element={<SchoolTextbooks addToCart={addToCart} count={cart.length} />} />
          <Route path='/all/bestsellers' element={<BestSellerAll addToCart={addToCart} count={cart.length} />} />
          <Route path='/electronics/bestsellers' element={<BestSellerElectronics addToCart={addToCart} count={cart.length} />} />
          <Route path='/fashion/bestsellers' element={<BestSellerFashion addToCart={addToCart} count={cart.length} />} />
          <Route path='/sports/bestsellers' element={<BestSellerSports addToCart={addToCart} count={cart.length} />} />
          <Route path='/books/bestsellers' element={<BestSellerBooks addToCart={addToCart} count={cart.length} />} />
          <Route path="/detaildescription/:id" element={<DetailDescription addToCart={addToCart} count={cart.length} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default RoutesFile