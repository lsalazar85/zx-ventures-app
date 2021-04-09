import { useEffect, useContext, useState } from "react";
import Head from 'next/head';

import { MainWrapper, ProductsWrapper, Title, Header, ProductList, Total } from "./styled";
import { GlobalStyle } from "../styles/GlobalStyle";

import ProductCard  from '../components/ProductCard'
import Modal from "../components/Modal";

import { getData, getProductRecommendation } from "../API/actions";
import MainContext from "../context/MainContext";

const Home = () =>  {

    const [modalState, setModalState] = useState(false);
   const { products, setProducts, recommendationsProducts, setRecommendationsProducts, total, setTotal } = useContext(MainContext);

   useEffect(() => {
       getData(setProducts, '/products');
   }, []);


   const getProductsByRecommendation = productId => {
       getProductRecommendation(setRecommendationsProducts, productId);
       setModalState(true);
   }

   const isAddOrSubtraction = (price, typeOperation) => {
       if(typeOperation === 'add'){
           setTotal(total + parseInt(price))
       } else if( total > 0 && typeOperation === 'subtraction'){
           setTotal(total - parseInt(price))
       }
   }

  return (
    <MainWrapper>
        <GlobalStyle />
      <Head>
        <title>Zx Ventures App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
          <Total>Total de Compra <bold>{total}</bold>$</Total>
          <Title>Siempre en Casa</Title>
      </Header>
      <ProductsWrapper>
          <Title>Productos</Title>
          <ProductList>
              {
                  products && products.map(item => {
                      return(
                          <ProductCard
                              key={item.product_id}
                              title={item.name}
                              src={item.image_url}
                              price={item.price_per_unit}
                              onClick={() => getProductsByRecommendation(item.product_id)}
                              add={() => isAddOrSubtraction(item.price_per_unit, 'add')}
                              subtraction={() => isAddOrSubtraction(item.price_per_unit, 'subtraction')}
                          />
                      )
                  })
              }
          </ProductList>
      </ProductsWrapper>
        <Modal
            title='Recomendados'
            width="50%"
            show={modalState}
            onClose={() => setModalState(false)}
            closeModal
            content={
                <ProductList>
                    {
                        recommendationsProducts && recommendationsProducts.map(item => {
                            return (
                                <ProductCard
                                    key={item.product_id}
                                    title={item.name}
                                    src={item.image_url}
                                    price={item.price_per_unit}
                                    width='16rem'
                                    add={() => isAddOrSubtraction(item.price_per_unit, 'add')}
                                    subtraction={() => isAddOrSubtraction(item.price_per_unit, 'subtraction')}
                                />
                            )
                        })
                    }
                </ProductList>
            }
        />
    </MainWrapper>
  )
}

export default Home;
