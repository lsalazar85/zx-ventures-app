import ButtonWrapper from "./styled";
import { func } from 'prop-types';

const Button = ({ children, onClick }) => (
    <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
)

Button.propTypes = {
    onClick: func.isRequired,
}

export default Button;