import React from 'react';
import renderer from 'react-test-renderer';
import ProductsList from './productsList';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Product List', () => {
    const tree = renderer
        .create(<BrowserRouter><ProductsList /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});