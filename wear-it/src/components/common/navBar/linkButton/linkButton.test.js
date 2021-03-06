import React from 'react';
import renderer from 'react-test-renderer';
import LinkButton from './linkButton';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Loading', () => {
    const tree = renderer
        .create(<BrowserRouter><LinkButton path='/da' value='dssd' /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});