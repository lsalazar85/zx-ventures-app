import { ProductImg, ProductCardWrapper, ProductPrice, ProductButtons, ProductTitle} from './styled'
import Button from "../Button";

const ProductCard = ({ title, src, price }) => (
    <ProductCardWrapper>
        <ProductTitle>{title}</ProductTitle>
        <ProductImg>
            <img src={src} alt='Product Img' />
        </ProductImg>
        <ProductPrice>
            <span>Precio</span>
            <span>{price}$</span>
        </ProductPrice>
        <ProductButtons>
            <Button>Hola</Button>
            <Button>Chao</Button>
        </ProductButtons>
    </ProductCardWrapper>
)

export default ProductCard;