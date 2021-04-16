import React from 'react';
import renderer from 'react-test-renderer';
import MenuItem from './menuItem';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly Menu Item', () => {
    const tree = renderer
        .create(
        <BrowserRouter>
        <MenuItem
        className='active'
        index='54'
        type='good'
        image='ho ho ho test'
        />
        </BrowserRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});