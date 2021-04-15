import React from 'react'

import style from './css/userStats.module.css';

const UserStats = ({  orders }) => {












    return (
        <div>
            <div className={style.infoBox}>
                <div>Username:</div>
                <div>Email:</div>
                <div>Total spend</div>
                <br />
                <div>Total product purchased: </div>
            </div>
        </div>
    )
}

export default UserStats
