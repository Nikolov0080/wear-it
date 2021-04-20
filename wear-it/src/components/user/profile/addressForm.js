import React from 'react'
import Input from '../input/input';
import addressValidator from '../../../validations/user/addressValidator';
import style from './css/addressForm.module.css';

const AddressForm = () => {

    const initialState = {
        addressLine: '',
        city: '',
        postalCode: ''
    };

    

    return (
        <div>

            <Input type="text"
                name="addressLine"
                placeholder="Address Line"
            />

            <Input type="text"
                name="city"
                placeholder="City" />

            <Input type="number"
                name="postalCode"
                placeholder="Postal code/ZIP" />

        </div>
    )
}

export default AddressForm;