import React from 'react'
import '../Components/Components.css'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Fashion = ({ addToCart, count }) => {
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(6)

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        axios.get("https://vikasecommerce-1ogg.onrender.com/products/fashion")
            .then((response) => setData(response.data))
            .catch((error) => console.log("Error", error))
    }, [])

    const loadMoreItems = () => {
        setVisible(prevValue => prevValue + 6)
    }

    return (
        <>
            <Navbar count={count} />
            <MdOutlineArrowBackIosNew className='back-icon' onClick={goBack} />
           
            <h4 className='headings'>FASHION</h4>
            <div className='products-data-container'>
                <div className='products-data'>
                    {
                        data.slice(0, visible).filter((item, index) => { return item.id >= 91 && item.id <= 150 }).map((element, index) => (
                            <div className='product-card' key={index}>
                                <Link to={`/detaildescription/${element.id}`} ><img src={element.productImage1} alt=""></img></Link>
                                <div className='product-card-data-description'>
                                    <Link to={`/detaildescription/${element.id}`} className='product-link'><h5>{element.productTitle}</h5></Link>
                                    <p className='product-price'>&#x20b9; {element.productPrice}</p>
                                    <button className='add-to-cart-btn' onClick={() => { addToCart(element) }}>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='load-more-products-container'>
                <button onClick={loadMoreItems} className={visible === 60 ? 'load-more-products-button-hidden' : 'load-more-products-button-visible'}>LOAD MORE PRODUCTS »</button>
            </div>
        </>
    )
}

export default Fashion