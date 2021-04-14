import React from 'react';

const Context = React.createContext(
    {
        user: null,
        cart: null,
        currentCategory: null,
        setCategory: () => { },
        login: () => { },
        logOut: () => { },
        setCart: () => { },
        currentCart: () => { }
    }
);

export default Context;