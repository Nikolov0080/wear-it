import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from './loginForm';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Login', () => {
    const tree = renderer
        .create(<BrowserRouter><LoginForm /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});