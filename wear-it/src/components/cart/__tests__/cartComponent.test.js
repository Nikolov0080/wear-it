import React from 'react';
import renderer from 'react-test-renderer';
import CartComponent from '../CartComponent';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Cart Component', () => {
    const tree = renderer
        .create(<BrowserRouter><CartComponent /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});