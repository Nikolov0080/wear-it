import React from 'react';
import renderer from 'react-test-renderer';
import CartItem from '../cartItem';

it('renders correctly Cart Item', () => {
    const tree = renderer
        .create(<CartItem
            token={'askdjasdlkdjkj4k23l4j3k2lrkwejrk234jkr2lew'}
            item={
                {
                    productName: 'name',
                    price: '40', size: "XL",
                    imageURL: 'testImageUrl',
                    _id: 'testID'
                }}
        />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});