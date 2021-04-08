import Head from 'next/head'
import {MainWrapper, ProductsWrapper, Title, Header, ProductList} from "./styled";
import ProductCard  from '../components/ProductCard'
import { GlobalStyle } from "../styles/GlobalStyle";


const Home = () =>  {
  return (
    <MainWrapper>
        <GlobalStyle />
      <Head>
        <title>Zx Ventures App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
          <Title>Siempre en Casa</Title>
      </Header>
      <ProductsWrapper>
          <Title>Productos</Title>
          <ProductList>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
          </ProductList>
      </ProductsWrapper>
    </MainWrapper>
  )
}

export default Home;
