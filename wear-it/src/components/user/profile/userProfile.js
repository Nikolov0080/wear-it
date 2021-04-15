import React, { useEffect, useState } from 'react'
import CompletedList from './completedList';
import style from './css/profile.module.css';
import UserStats from './userStats';
import pureToken from '../../../utils/pureToken';
import completedOrders from '../../../controllers/orders/completedOrders';
import Loading from '../../common/loading';

const UserProfile = () => {

    const [token, setToken] = useState('');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    pureToken().then((token) => {
        setToken(token)
    });

    useEffect(() => {
        if(token){

            completedOrders(token).then((items) => {
                setOrders(items.data);
                setLoading(false)
            })
        }
    }, [token])

    if (loading) {
        return <Loading />
    }

    return (
        <div className={style.profileBox}>
            <UserStats  orders={orders} />
            <CompletedList  orders={orders} />
        </div>
    )
}

export default UserProfile;