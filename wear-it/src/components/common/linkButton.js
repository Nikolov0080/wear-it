import React from 'react'
import style from './css/linkButton.module.css';
import { Link } from 'react-router-dom';

const LinkButton = ({ path, value }) => {
    return (
        <div>
            <Link to={path}>{value}</Link>
        </div>
    )
}

export default LinkButton;