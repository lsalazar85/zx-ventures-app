import styled from 'styled-components';

const ProductCardWrapper = styled.main`
    display: flex;
    flex-direction: column;
    width: 12rem;
    border: 2px solid #1F396D;
    padding: 1rem;
    border-radius: 4px;
    margin-right: 1rem;
  
  &:last-child {
    margin-right: 0;
  }
`

const ProductTitle = styled.span`
  display: flex;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`

const ProductImg = styled.div`
    display: flex;
    
    img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
`

const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  margin-bottom: 0.5rem;
  
  span {
    &:first-child {
      font-weight: 700;
      margin-bottom: 0.3rem;
    }
    
    &:last-child {
      font-weight: 300;
      font-size: 1rem;
    }
  }
`

const ProductButtons = styled.div`
    display: flex;
    justify-content: center;
  
  button {
    &:first-child {
      margin-right: 0.5rem;
    }
  }
`

export { ProductImg, ProductCardWrapper, ProductPrice, ProductButtons, ProductTitle }

