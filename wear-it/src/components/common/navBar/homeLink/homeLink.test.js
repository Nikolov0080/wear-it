import React from 'react';
import renderer from 'react-test-renderer';
import HomeLink from './homeLink';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Home Link', () => {
    const tree = renderer
        .create(<BrowserRouter><HomeLink /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});