import React, { useState } from 'react'
import Input from '../input/input';
import ErrMessage from '../../common/errMessage/errMessage';
import addressValidator from '../../../validations/user/addressValidator';
import updateAddress from '../../../controllers/user/address';
import style from './css/addressForm.module.css';
const AddressForm = () => {

    const [addressLine, setAddressLine] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const [err, setErr] = useState(false);

    const address = {
        addressLine,
        city,
        postalCode
    }

    const error = addressValidator(addressLine, city, postalCode)

    const updateAddress = () => {
        error ? setErr(error) : setErr(false);

        if (err === false) {
            updateAddress(address).then(
                console.log
            )
        }

    }

    const check = () => {

        err ? setErr(error) : setErr(false)

    }

    return (
        <div onChange={() => check()}>

            {err ? <ErrMessage err={err} /> : ''}

            <Input type="text" foo={setAddressLine}
                name="addressLine"
                placeholder="Address Line"
            />

            <Input type="text" foo={setCity}
                name="city"
                placeholder="City" />

            <Input type="number" foo={setPostalCode}
                name="postalCode"
                placeholder="Postal code/ZIP" />

            <div onClick={() => { updateAddress() }} className={style.addAddress}>
                update address
            </div>
        </div>
    )
}

export default AddressForm;