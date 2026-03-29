import React, { useState, useEffect, useContext } from 'react';
import { ProductDataContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const productData = useContext(ProductDataContext)
    const { id } = useParams()
    const selectedProduct = productData.find((elem) => id == elem.id)
  return (
    <div>
      <div className='products'>
        <img src={selectedProduct.image} />
        <h2>{selectedProduct.title}</h2>
        <p>${selectedProduct.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;