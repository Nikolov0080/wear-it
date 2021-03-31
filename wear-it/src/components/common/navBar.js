import React from 'react';
import LinkButton from './linkButton';
import linksList from './linksList';

const NavBar = () => {
    return (
        <div>
            
            {linksList(true).map(({ name, path }, index) => {
                return <LinkButton key={index} name={name} path={path} />
            })}
        </div>
    )
}

export default NavBar;