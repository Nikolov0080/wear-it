import React, { useState } from 'react'
import Input from '../input/input';
import ErrMessage from '../../common/errMessage/errMessage';
import addressValidator from '../../../validations/user/addressValidator';
import updateAddress from '../../../controllers/user/address';
import pureToken from '../../../utils/pureToken';
import style from './css/addressForm.module.css';

const AddressForm = ({ hide }) => {

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

    const submit = () => {
        error ? setErr(error) : setErr(false);

        if (err === false) {
            pureToken().then((token) => {
                updateAddress(address, token).then((resp) => {
                    console.log(resp);
                    hide(false)
                }
                )
            })
        }
    }

    const check = () => {
        err ? setErr(error) : setErr(false)
    }

    return (
        <div onChange={() => check()}>
            <p>after updating reLog to see the results</p>
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

            <div onClick={() => { submit() }} className={style.addAddress}>
                update address
            </div>
            <div onClick={() => { hide(false) }} className={style.cancel}>
                cancel
            </div>
        </div>
    )
}

export default AddressForm;