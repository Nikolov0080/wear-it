import React, { useContext } from 'react'
import Context from '../../../context/Context';
import style from './css/userStats.module.css';

const UserStats = ({ orders }) => {

    const context = useContext(Context)

    const {
        username,
        email
    } = context.user

    const totalSpend = orders.reduce((acc, cVal) => {
        acc += Number(cVal.price);
        return acc
    }, 0);

    return (
        <div>
            <div className={style.infoBox}>
            <h1 className={style.title}>User Stats</h1>
                <div className={style.innerBox}>
                    <div>Username: <b>{username}</b></div>
                    <div>Email: <b>{email} </b></div>
                    <div>Total spend: <b>{totalSpend}.00</b> USD</div>
                    <br />
                    <div>Total product purchased: <b>{orders.length}</b> </div>
                </div>

            </div>
        </div>
    )
}

export default UserStats;