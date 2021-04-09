const React = require('react');
const { render } = require('@testing-library/react');

import Modal from '../../../components/Modal';
import { Animation, ModalFooter } from '../../../components/Modal/styled';

describe('Modal', () => {
    test('Modal should render correctly', () => {
        const { asFragment } = render(<Modal onClose={jest.fn()} show />);

        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });

    test('Modal should render correctly with others props', () => {
        const content = 'content';
        const footer = 'footer';

        const { asFragment } = render(
            <Modal
                onClose={jest.fn()}
                show
                closeModal={jest.fn()}
                title={'Modal Test File'}
                content={<div>{content}</div>}
                footer={<div>{footer}</div>}
            />,
        );

        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });
});

// Styled Componentes Testing

describe('ModalFooter', () => {
    test('ModalFooter should render correctly', () => {
        const children = 'Modal';

        const { asFragment } = render(<ModalFooter position={'flex-end'}>{children}</ModalFooter>);

        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Animation', () => {
    test('Animation should render correctly', () => {
        const content = 'Animation';
        const state = '';

        const { asFragment } = render(<Animation state={state}>{content}</Animation>);

        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });
});