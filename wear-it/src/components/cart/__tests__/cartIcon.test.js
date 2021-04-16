import React from 'react';
import renderer from 'react-test-renderer';
import CartIcon from '../cartIcon';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Cart Item', () => {
    const tree = renderer
        .create(<BrowserRouter><CartIcon /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});