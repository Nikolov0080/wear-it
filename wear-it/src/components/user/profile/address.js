import React, { useContext, useEffect, useState } from 'react'
import Context from '../../../context/Context';
import AddressForm from './addressForm';
import style from './css/address.module.css';

const Address = () => {

    const context = useContext(Context);

    const [address, setAddress] = useState(false);

    useEffect(() => {
        context.user.address ? setAddress(context.user.address) : setAddress(false);
    }, [context]);

    return (
        <div>
            <AddressForm />
        </div>
    )
}

export default Address;