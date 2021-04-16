import React from 'react';
import renderer from 'react-test-renderer';
import RegisterForm from './registerForm';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Register', () => {
    const tree = renderer
        .create(<BrowserRouter><RegisterForm /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});