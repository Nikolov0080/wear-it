import React, { useState } from 'react'
import AuthButton from './btn';
import Input from './input';
import loginValidator from '../../validations/user/loginValidator';
import style from './css/loginForm.module.css';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErr(loginValidator(username, password))        // console.log(username)
        // console.log(password)
    }

    return (
        <div className={style.loginForm}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2 className={style.title}>LOGIN</h2>
                <Input
                    err={err}
                    foo={setUsername}
                    name="username"
                    placeholder="Username"
                    type="text"
                />
                <Input
                    err={err}
                    foo={setPassword}
                    name="password"
                    placeholder="Password"
                    type="password"
                />
                <AuthButton value="Submit" />
            </form>
        </div>
    )
}

export default LoginForm;