import React, { useState } from 'react'
import AuthButton from './btn';
import Input from './input';
import loginValidator from '../../validations/user/loginValidator';
import ErrMessage from '../common/errMessage';
import style from './css/loginForm.module.css';
import { loginController } from '../../controllers/user/login';

const LoginForm = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    // set no user found as an error
    const handleSubmit = (e) => {
        e.preventDefault();
        setErr(loginValidator(username, password));
        if (err === false) {
            loginController(username, password).then(console.log);
        }
    }

    const check = (e) => {
        if (err !== false) {
            setErr(loginValidator(username, password));
        }
    }

    return (
        <div onChange={(e) => check(e)} className={style.loginForm}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2 className={style.title}>LOGIN</h2>
                {err !== false ? <ErrMessage err={err} /> : ''}
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