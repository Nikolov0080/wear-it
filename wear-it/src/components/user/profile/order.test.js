import React from 'react';
import renderer from 'react-test-renderer';
import Order from './order';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Order', () => {
    const tree = renderer
        .create(<BrowserRouter>
            <Order data={{
                imageURL: "fkjgsdh",
                price: "45",
                productName: "meow",
                size: 'XXXXXXXlsd'
            }
            }

            />
        </BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});