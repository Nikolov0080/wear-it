import React from 'react';
import renderer from 'react-test-renderer';
import ErrMessage from './errMessage';
// import { BrowserRouter } from 'react-router-dom';

it('renders correctly Error Message', () => {
    const tree = renderer
        .create(<ErrMessage err='test message' />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});