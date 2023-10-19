import React from 'react'
import "./Components.css"
import Navbar from './Navbar'
// import HomeBannerCarousel from './HomeBannerCarousel'
import BestSellers from '../BestSellers/BestSellers'
import HomeBannerAutoCarousel from './HomeBannerAutoCarousel'
import Services from './Services'
import FeaturedProducts from './FeaturedProducts'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Home = ({ count }) => {

    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(9)
    const [cart, setCart] = useState([]);
    console.log(cart)
    const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }])
        alert('Item Added to cart successfully !!')
      }

    useEffect(() => {
        axios.get("https://vikasecommerce-1ogg.onrender.com/products/mixed")
            .then((response) => setData(response.data))
            .catch((error) => console.log("Error", error))


            
        }, [])
        
    const loadMoreItems = () => {
        setVisible(prevValue => prevValue + 3)
    }

    return (
        <>
            <Navbar count={count} />
            <HomeBannerAutoCarousel />
            <FeaturedProducts addToCart={addToCart} count={cart.length} />
            <Services />
            <div id='best-sellers'>
                <h3>BEST SELLERS</h3>
                <BestSellers />
                <div className='bestseller-products-data-container'>
                    <div className='bestseller-products-data'>
                        {
                            data.slice(0, visible).filter((item, index) => { return item.id >= 151 && item.id <= 162}).map((element, index) => (
                                <div className='bestseller-product-card' key={index}>
                                    <Link to={`/detaildescription/${element.id}`} ><img src={element.productImage1} alt=""></img></Link>
                                    <div className='bestseller-product-card-data-description'>
                                        <Link to={`/detaildescription/${element.id}`} className='product-link'><h5>{element.productTitle}</h5></Link>
                                        <p className='bestseller-product-price'>&#x20b9; {element.productPrice}</p>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                      
                </div>
                <div className='load-more-products-container-home'>
                    <button onClick={loadMoreItems} className={visible === 15 ? 'load-more-products-button-hidden' : 'load-more-products-button-visible'}>LOAD MORE</button>
                </div>
            </div>
            {/* <HomeBannerCarousel /> */}
            <hr className='home-hr' />
            <Footer />
        </>
    )
}

export default Home




