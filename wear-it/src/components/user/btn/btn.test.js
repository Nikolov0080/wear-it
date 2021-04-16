import React from 'react';
import renderer from 'react-test-renderer';
import AuthButton from './btn';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Auth Button', () => {
    const tree = renderer
        .create(<BrowserRouter><AuthButton  /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});