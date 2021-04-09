import { string, func } from 'prop-types';
import { ProductImg, ProductCardWrapper, ProductPrice, ProductButtons, ProductTitle} from './styled'
import Button from "../Button";


const ProductCard = ({ title, src, price, onClick, width, add, subtraction}) => (
    <ProductCardWrapper width={width}>
        <ProductTitle>{title}</ProductTitle>
        <ProductImg onClick={onClick}>
            <img src={src} alt='Product Img' />
        </ProductImg>
        <ProductPrice>
            <span>Precio</span>
            <span>{price}$</span>
        </ProductPrice>
        <ProductButtons>
            <Button onClick={subtraction}>-</Button>
            <Button onClick={add}>+</Button>
        </ProductButtons>
    </ProductCardWrapper>
)

ProductCard.defaultProps = {
    width: '19rem',
}

ProductCard.propTypes = {
    title: string.isRequired,
    price: string.isRequired,
    onClick: func,
    width: string,
    add: func.isRequired,
    subtraction: func.isRequired,
}



export default ProductCard;