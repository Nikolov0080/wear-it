import React from 'react';
import renderer from 'react-test-renderer';
import Landing from './landing';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Landing', () => {
    const tree = renderer
        .create(<BrowserRouter><Landing /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});