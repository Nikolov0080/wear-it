import React, { useContext, useEffect, useState } from 'react'
import Context from '../../../context/Context';
import AddressForm from './addressForm';
import AddressView from './addressView';
import style from './css/address.module.css';

const Address = () => {

    const context = useContext(Context);
    const [show, setShow] = useState(false);
    const [address, setAddress] = useState(false);

    useEffect(() => {
        context.user.address ? setAddress(context.user.address) : setAddress(false);
    }, [context]);


    console.log(show)

    return (
        <div className={style.box}>
            {!address
                ?
                <div>
                    <h3>No address added</h3>
                    {!show ?
                        <div onClick={() => setShow(true)} className={style.addBtn}>
                            update address
                    </div>

                        : ''}

                </div>
                :
                <div>
                    {!show ?
                        <div>
                            <div onClick={() => setShow(true)} className={style.addBtn}>
                                update address
                    </div>
                            <AddressView address={address} />
                        </div>


                        : ''}
                </div>
            }

            {show ? <AddressForm hide={setShow} /> : ''}

            <hr />
        </div>
    )
}

export default Address;