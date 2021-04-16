import React from 'react';
import renderer from 'react-test-renderer';
import NavLink from './navLink';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Nav Link', () => {
    const tree = renderer
        .create(<BrowserRouter><NavLink path="/lala" /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});