import React, { Component } from 'react';

class Context extends Component {
    state = {
        user: null,
        cart: null,
        logOut: () => { }
    }
}

export const Context = React.createContext(

);