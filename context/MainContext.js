import React, { useState } from 'react';

const MainContext = React.createContext({});

export const MainContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productsByCategories,setProductsByCategories] = useState([]);
    const [categories, setCategories] = useState([]);
    const [recommendationsProducts, setRecommendationsProducts] = useState([]);
    const [total, setTotal] = useState(0);

    return <MainContext.Provider value={{
        products,
        setProducts,
        productsByCategories,
        setProductsByCategories,
        recommendationsProducts,
        setRecommendationsProducts,
        total,
        setTotal,
        categories,
        setCategories,
    }}
    >
        {children}
    </MainContext.Provider>;
};

export default MainContext;