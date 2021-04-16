import React from 'react';
import renderer from 'react-test-renderer';
import Input from './input';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Input', () => {
    const tree = renderer
        .create(<BrowserRouter><Input 
            type="text" name='test' placeholder="meow"
            /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});