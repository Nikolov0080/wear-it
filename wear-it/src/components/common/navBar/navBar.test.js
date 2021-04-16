import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from './navBar';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Nav Bar', () => {
    const tree = renderer
        .create(<BrowserRouter><NavBar/></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});