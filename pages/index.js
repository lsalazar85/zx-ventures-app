import { useEffect, useContext, useState } from "react";
import { isEmpty } from 'lodash';
import Head from 'next/head';

import { MainWrapper, ProductsWrapper, Title, Header, ProductList, Total, Categories } from "./styled";
import { GlobalStyle } from "../styles/GlobalStyle";

import ProductCard  from '../components/ProductCard'
import Modal from "../components/Modal";
import Button from "../components/Button";

import { getData, getProductRecommendation } from "../API/actions";
import MainContext from "../context/MainContext";

const Home = () =>  {
    const [modalState, setModalState] = useState(false);
    const {
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
    } = useContext(MainContext);

   const getProductsByRecommendation = productId => {
       getProductRecommendation(setRecommendationsProducts, productId);
       setModalState(true);
   }

   const isAddOrSubtraction = (price, typeOperation) => {
       let productPrice = parseFloat(price);

       if(typeOperation === 'add'){
           setTotal(total + productPrice)
       } else if( total > 0 && typeOperation === 'subtraction'){
           setTotal(total - productPrice)
       }
   }

   const getCategoriesProducts = type => {
       let result;

       result = products.flatMap(product => {
           return {
               [product.categories] : { product }
           }
       });

       return setProductsByCategories(result.filter(product => product[type]).flatMap(item => Object.values(item)));
   }

    useEffect(() => {
        getData(setProducts, '/products');
        getData(setCategories, '/categories')
    }, []);

  return (
    <MainWrapper>
        <GlobalStyle />
      <Head>
        <title>Zx Ventures App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
          <Total>Total de Compra <bold>{total}</bold>$</Total>
          <Button onClick={() => setTotal(0)}>Vaciar Total</Button>
          <Title>Siempre en Casa</Title>
      </Header>
      <ProductsWrapper>
          <Title>Productos</Title>
          <Categories>
              {
                  categories && categories.map(item => (
                      <Button onClick={() => getCategoriesProducts(item)} key={item}>{item}</Button>
                  ))
              }
          </Categories>
          <ProductList>
              {
                 isEmpty(productsByCategories) && products.map(item => {
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
              {
                  !isEmpty(productsByCategories) && productsByCategories.map(item => {
                      return(
                          <ProductCard
                              key={item.product.product_id}
                              title={item.product.name}
                              src={item.product.image_url}
                              price={item.product.price_per_unit}
                              onClick={() => getProductsByRecommendation(item.product.product_id)}
                              add={() => isAddOrSubtraction(item.product.price_per_unit, 'add')}
                              subtraction={() => isAddOrSubtraction(item.product.price_per_unit, 'subtraction')}
                          />
                      )
                  })
              }
          </ProductList>
      </ProductsWrapper>
        <Modal
            title='Recomendados'
            width="1000px"
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
