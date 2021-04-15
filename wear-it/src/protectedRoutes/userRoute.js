import React,{useContext} from 'react'
import Context from '../context/Context'
import { Redirect, Route } from 'react-router-dom';

const UserRoute = ({ path, component }) => {

    const context = useContext(Context);

    const user = context.user;

    if (user) {
        return (
            <Route exact path={path} component={component} />
        )
    }

    return (
        <div>
            <Redirect href={path = '/'} />
        </div>
    )
}

export default UserRoute;