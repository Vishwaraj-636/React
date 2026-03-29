import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { getAllProductData } from '../api/productApi';
export const ProductDataContext = createContext([])

const ProductContext = (props) => {

    const [productData, setproductData] = useState([])

    const setData = async () => {
        setproductData(await getAllProductData)
    }
    useEffect(() => {
        setData()
    }, [])

    return (
        <ProductDataContext.Provider value={productData}>
            {props.children}
        </ProductDataContext.Provider>
    );
};

export default ProductContext;