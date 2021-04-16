import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Context from '../context/Context';

const TestingEnvironment = ({ value, children }) => {
    return (
        <div>
            <BrowserRouter>
                <Route>
                    <Context.Provider value={value}>
                        {children}
                    </Context.Provider>
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default TestingEnvironment;