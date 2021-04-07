import React, { useState } from 'react'
import style from './css/registerForm.module.css';
import AuthButton from './btn';
import registerValidator from '../../validations/user/registerValidator';
import ErrMessage from '../common/errMessage';
import Input from './input';

const RegisterForm = () => {

    const [err, setErr] = useState(false);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setErr(registerValidator(username, email, password, rePassword));
        const validData = {
            username,
            email,
            password
        }
        console.log(validData)
    }

    const check = (e) => {
        if (err !== false) {
            setErr(registerValidator(username, password));
        }
    }

    return (
        <div>
            <div onChange={(e) => check(e)} className={style.registerForm}>
                <h2 className={style.title}>REGISTER</h2>
                {err !== false ? <ErrMessage err={err} /> : ''}
                <form onSubmit={(e) => handleSubmit(e)}>

                    <Input name="username"
                        placeholder="Username"
                        type="text"
                        foo={setUsername} />

                    <Input name="email"
                        placeholder="Email"
                        type="email"
                        foo={setEmail} />

                    <Input name="password"
                        placeholder="Password"
                        type="password"
                        foo={setPassword} />

                    <Input name="rePassword"
                        placeholder="Repeat Password"
                        type="password"
                        foo={setRePassword} />


                    <AuthButton value="submit" />

                </form>
            </div>
        </div>
    )
}

export default RegisterForm;