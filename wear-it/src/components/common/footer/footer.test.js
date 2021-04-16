import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';
// import { BrowserRouter } from 'react-router-dom';

it('renders correctly Footer', () => {
    const tree = renderer
        .create(<Footer  />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});