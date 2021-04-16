import React from 'react';
import renderer from 'react-test-renderer';
import HomeMenu from './homeMenu';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Home Menu', () => {
    const tree = renderer
        .create(<BrowserRouter><HomeMenu/></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});