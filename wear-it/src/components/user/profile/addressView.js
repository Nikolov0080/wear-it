import React from 'react'
// import style from './css/addressView.module.css'

const AddressView = ({address}) => {
    return (
        <div>
           <p>addressLine: <b>{address.addressLine}</b> </p>
           <p>City:   <b>{address.city}</b></p>
           <p>Postal Code   <b>{address.postalCode}</b></p>
        </div>
    )
}

export default AddressView;