import React, { useState, useContext } from 'react'
import AuthButton from './btn';
import Input from './input';
import loginValidator from '../../validations/user/loginValidator';
import ErrMessage from '../common/errMessage';
import style from './css/loginForm.module.css';
import { loginController } from '../../controllers/user/login';
import Context from '../../context/Context';

const LoginForm = () => {

    const context = useContext(Context);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    // set no user found as an error

    const handleSubmit = (e) => {
        e.preventDefault();
        setErr(loginValidator(username,password))

        if (loginValidator(username,password)=== false) { // fix

            loginController(username, password).then((resp) => {
                if (resp.status === 202) {
                    return setErr(resp.data);
                }
                context.login(resp);
            })
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