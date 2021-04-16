import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './loading';
// import { BrowserRouter } from 'react-router-dom';

it('renders correctly Loading', () => {
    const tree = renderer
        .create(<Loading />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});