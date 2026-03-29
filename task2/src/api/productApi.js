import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const getAllProductData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
    
}