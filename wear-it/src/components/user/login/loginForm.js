import React, { useState, useContext } from 'react'
import AuthButton from '../btn/btn';
import Input from '../input/input';
import loginValidator from '../../../validations/user/loginValidator';
import ErrMessage from '../../common/errMessage/errMessage';
import style from './loginForm.module.css';
import { loginController } from '../../../controllers/user/login';
import Context from '../../../context/Context';
import { useHistory } from 'react-router-dom';
import ErrorBoundary from '../../../errorBoundary/errorBoundary';

const LoginForm = () => {

    const context = useContext(Context);
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setErr(loginValidator(username, password))

        if (loginValidator(username, password) === false) { 

            loginController(username, password).then((resp) => {
                
                if (resp.status === 202) {
                    return setErr(resp.data);
                }else{
                    console.log(resp.user)
                    context.login(resp.user);
                    history.push('/');
                }
            })
         
        }
    }

    const check = (e) => {
        if (err !== false) {
            setErr(loginValidator(username, password));
        }
    }

    return (

        <div className={style.box}>
            <ErrorBoundary err="login page">
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
            </ErrorBoundary>
        </div>
    )
}

export default LoginForm;