import { ProductImg, ProductCardWrapper, ProductPrice, ProductButtons } from './styled'
import Button from "../Button";

const ProductCard = ({ title, src, price }) => (
    <ProductCardWrapper>
        <ProductImg>
            <img src='https://cdn.shopify.com/s/files/1/0254/2947/5433/products/sec-andes-origen-lata-473-rubia_95x95@2x.jpg?v=1607115535?nocache=0.04657434384605352' alt='Product Img' />
        </ProductImg>
        <ProductPrice>
            <span>Precio</span>
            <span>18.20$</span>
        </ProductPrice>
        <ProductButtons>
            <Button>Hola</Button>
            <Button>Chao</Button>
        </ProductButtons>
    </ProductCardWrapper>
)

export default ProductCard;