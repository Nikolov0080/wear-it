import React from 'react';

import style from './css/completedList.module.css';
import Order from './order';

const CompletedList = ({ orders }) => {

    if (orders.length === 0) {
        return (
            <div className={style.completedBox}>
                <h1>No orders yet...</h1>
            </div>
        )
    }

    return (
        <div>
            <div className={style.completedBox}>
                {orders.map((data, i) => {
                    return (
                        <div>
                            <Order data={data} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CompletedList;