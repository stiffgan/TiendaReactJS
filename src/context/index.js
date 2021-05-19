	
import React from 'react';
 
// Estado inicial de la aplicación.
const initialState = {
    products: [],
    addProducts: (products) => {},
    deleteProducts: () => {}
  }
 
export default React.createContext(initialState)
