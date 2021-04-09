import styled from 'styled-components';

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("https://cdn.shopify.com/s/files/1/0254/2947/5433/t/17/assets/main-banner.png?v=7893103385863236577");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 25rem;
  padding: 1rem;
`

const Title = styled.h1``

const ProductsWrapper = styled.section`
    display: flex;
    flex-direction: column;
  
    h1 {
      padding: 1rem;
      background: #1F396D;
      color: #ffffff;
    }
`

const ProductList = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem ;
    flex-wrap: wrap;
`

const Total = styled.span`
    color: #ffffff;
`

const Categories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1rem 0;
    
    button {
      margin-right: 0.5rem;
      &:last-child{
        margin-right: 0;
      }
    }
`

export { MainWrapper, ProductsWrapper, Title, Header, ProductList, Total, Categories};