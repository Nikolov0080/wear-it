import React, { useState, useContext } from 'react'
import style from './registerForm.module.css';
import AuthButton from '../btn/btn';
import registerValidator from '../../../validations/user/registerValidator';
import ErrMessage from '../../common/errMessage/errMessage';
import Input from '../input/input';
import registerController from '../../../controllers/user/register';
import Context from '../../../context/Context';
import ErrorBoundary from '../../../errorBoundary/errorBoundary';

const RegisterForm = () => {

    const context = useContext(Context);
    const [err, setErr] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setErr(registerValidator(username, email, password, rePassword));

        if (registerValidator(username, email, password, rePassword) === false) {
            registerController(username, email, password, rePassword).then((resp) => {
                if (resp.status === 202) { return setErr(resp.data) }
                context.login(resp);
            })
        }

    }

    const check = (e) => {
        if (err !== false) {
            setErr(registerValidator(username, email, password, rePassword));
        }
    }

    return (
        <div className={style.box}>
            <ErrorBoundary err="register page">
                <div onChange={(e) => check(e)} className={style.registerForm}>
                    <h2 className={style.title}>REGISTER</h2>
                    {err !== false ? <ErrMessage err={err} /> : ''}
                    <form onSubmit={(e) => handleSubmit(e)}>
{/* {new Error('sdlkhf')} */}
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
            </ErrorBoundary>

        </div>
    )
}

export default RegisterForm;