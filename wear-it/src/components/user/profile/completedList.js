import React from 'react';

import style from './css/completedList.module.css';
import Order from './order';

const CompletedList = ({ orders }) => {

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