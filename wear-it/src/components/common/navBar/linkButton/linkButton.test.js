import React from 'react';
import renderer from 'react-test-renderer';
import LinkButton from './linkButton';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Link Button', () => {
    const tree = renderer
        .create(<BrowserRouter><LinkButton /></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});