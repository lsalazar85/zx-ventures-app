import Head from 'next/head'
import { MainWrapper, ProductsWrapper, Title, Header, ProductList } from "./styled";
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
              <ProductCard
                  title='Vino Novecento Raices 750 ml - Tinto Cabernet Sauvignon'
                  src='https://cdn.shopify.com/s/files/1/0254/2947/5433/products/sec-andes-origen-lata-473-rubia_95x95@2x.jpg?v=1607115535?nocache=0.04657434384605352'
                  price={'18.20'}
              />
          </ProductList>
      </ProductsWrapper>
    </MainWrapper>
  )
}

export default Home;
