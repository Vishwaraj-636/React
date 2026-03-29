import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductDataContext } from '../context/ProductContext';

const Product = () => {
    const productData = useContext(ProductDataContext) || []

    let renderData = ''
    if (productData.length > 0) {
        renderData = productData.map((elem) => (
            <Link to={`/products/${elem.id}`} key={elem.id}>
                <div className='products'>
                    <img src={elem.image} alt={elem.title} />
                    <h2>{elem.title}</h2>
                </div>
            </Link>
        ))
    }
    return (
        <div>
            <div className='allProducts'>
                {renderData}
            </div>
        </div>
    );
};

export default Product;