import React from 'react'
import './Components.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://backend-ecommer-dq0g.onrender.com/products/electronics")
            .then((response) => setData(response.data))
            .catch((error) => console.log("Error", error))
    }, [])

    return (
        <>
            <div className='featured'>
                <div className='featured-products'>
                    <h3>FEATURED PRODUCTS</h3>
                    <div className='featured-products-container'>
                        <div className='featured-products-data'>
                            {
                                data.filter((item, index) => { return item.id >= 1 && item.id <= 10 }).map((element, index) => (
                                    <div className='featured-product-card' key={index}>
                                        <Link to={`/detaildescription/${element.id}`} ><img src={element.productImage1} alt=""></img></Link>
                                        <div className='featured-product-card-data-description'>
                                            <Link to={`/detaildescription/${element.id}`} className='product-link'><h5>{element.productTitle}</h5></Link>
                                            <p className='featured-product-price'>&#x20b9; {element.productPrice}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts