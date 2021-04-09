import styled from 'styled-components';

const Animation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transition: 200ms;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  z-index: 120;
  width: 100vw;
  height: 100vh;
`;

const CloseModalIcon = styled.div`
  width: 1em;
  height: 1em;
  cursor: pointer;
  position: absolute;
  right: 32px;
  top: 42px;
  &:before {
    position: absolute;
    left: 0.5em;
    top: 0;
    content: '';
    height: 1em;
    width: 1px;
    background-color: #666;
    cursor: pointer;
    transform: rotate(45deg);
  }
  &:after {
    position: absolute;
    left: 0.5em;
    top: 0;
    content: '';
    height: 1em;
    width: 1px;
    background-color: #666;
    cursor: pointer;
    transform: rotate(-45deg);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  animation: fadeIn 0.2s ease-in-out;
  z-index: 120;
`;

const MainModal = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  max-height: ${props => props.maxHeight};
  z-index: 130;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
`;

const ModalHeader = styled.header`
  flex: 0 0 auto;
  align-items: center;
  color: #000000;
  padding: 32px;
  h3 {
    font-size: 1.5em;
    margin: 0;
  }
`;

const ModalContent = styled.div`
  flex: 1 1 auto;
  color: #000000;
  padding: 0 32px;
  position: relative;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  p {
    margin: 0;
  }
`;

const ModalFooter = styled.footer`
  flex: 0 0 auto;
  padding: 0 32px;
  justify-content: ${props => props.position};
`;

export { CloseModalIcon, Animation, ModalOverlay, MainModal, ModalHeader, ModalContent, ModalFooter };