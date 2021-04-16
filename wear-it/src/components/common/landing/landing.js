import React, { useEffect, useState } from 'react'
import ErrorBoundary from '../../../errorBoundary/errorBoundary';
import style from './landing.module.css';
import LinkButton from '../navBar/linkButton/linkButton';

const Landing = ({ user }) => {

    const userBool = !!user;

    const [username, setUsername] = useState(null)

    useEffect(() => {
        if (user) {
            setUsername(user.username || user.user.username);
        }
    }, [user]);

    return (
        <ErrorBoundary err="landing at home page">
            <div className={style.pageInfo}>
                {
                    userBool !== false
                        ?
                        <div>
                            <h1>Welcome <span className={style.username}>{username}</span></h1>
                            <div className={style.pageInfo}>
                                <LinkButton path="/cart" value="Cart" />
                                <br />
                                <LinkButton path="/profile" value="Profile" />

                            </div>

                        </div>
                        :
                        <div>
                            <div >
                                <h1>Welcome to <i>wear-it</i> <br /> e-commerce </h1>
                                <span>
                                    You can select category from the menu below, but you can
                       <span className={style.spanSpecial}> Add to cart </span>
                        and
                        <span className={style.spanSpecial}> order </span>
                        products only if you are registered user!
                   </span>
                                <br />

                                {/* {new Error('fkdsl')} */}
                                <div className={style.authBox}>
                                    <LinkButton path="/login" value="Login" />
                                    <br />
                                    <LinkButton path="/register" value="Register" />
                                </div>
                            </div>
                        </div>
                }
            </div>
        </ErrorBoundary>
    )
}

export default Landing
