import React from 'react'
import '../Components/Components.css'
import { Link} from 'react-router-dom'

import axios from 'axios'
import { useEffect, useState } from 'react'

const Fashion = ({ addToCart,count}) => {
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(6)

    useEffect(() => {
        axios.get("https://vikasecommerce-1ogg.onrender.com/products/alldata")
            .then((response) => setData(response.data))
            .catch((error) => console.log("Error", error))
    }, [])

    const loadMoreItems = () => {
        setVisible(prevValue => prevValue + 6)
    }

    return (
        <>
        
            <h4 className='headings'>FEATURED PRODUCTS</h4>
            <div className='products-data-container'>
                <div className='products-data'>
                    {
                        data.slice(0, visible).filter((item, index) => { return item.id >= 1 && item.id <= 150 }).map((element, index) => (
                            <div className='product-card' key={index}>
                                <Link to={`/detaildescription/${element.id}`} ><img src={element.productImage1} alt=""></img></Link>
                                <div className='product-card-data-description'>
                                    <Link to={`/detaildescription/${element.id}`} className='product-link'><h5>{element.productTitle}</h5></Link>
                                    <p className='product-price'>&#x20b9; {element.productPrice}</p>
                                    <button className='add-to-cart-btn' onClick={() => {addToCart(element) }}>Add to Cart</button>
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