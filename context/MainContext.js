import React, { useState } from 'react';

const MainContext = React.createContext({});

export const MainContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [recommendationsProducts, setRecommendationsProducts] = useState([]);
    const [total, setTotal] = useState(0);

    return <MainContext.Provider value={{
        products,
        setProducts,
        recommendationsProducts,
        setRecommendationsProducts,
        total,
        setTotal,
    }}
    >
        {children}
    </MainContext.Provider>;
};

export default MainContext;