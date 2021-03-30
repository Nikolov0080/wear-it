import React from 'react';

const Context = React.createContext(
    {
        user: null,
        cart: null,
        login: () => { },
        logOut: () => { }
    }
);

export default Context;