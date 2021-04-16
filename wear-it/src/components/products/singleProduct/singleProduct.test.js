import React from 'react';
import renderer from 'react-test-renderer';
import SingleProduct from './singleProduct';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Single Product', () => {
    const tree = renderer
        .create(<BrowserRouter>
        <SingleProduct name='prodName' imageURL='klfsdkfjlsdf45345lkjlsdk'
        price="404598"
        id="_lkedf+fdpo" />
        </BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});