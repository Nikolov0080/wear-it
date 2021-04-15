import React from 'react'
import style from './css/landing.module.css';
import LinkButton from './navBar/linkButton';

const Landing = ({ user }) => {

    const userBool = !!user;

    return (
        <div className={style.pageInfo}>
            {
                userBool !== false

                    ?
                    <div>
                        <div className={style.pageInfo}>

                            <LinkButton path="/cart" value="Cart" />
                            <br/>
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

                            <div className={style.authBox}>
                                <LinkButton path="/login" value="Login" />
                                <br />
                                <LinkButton path="/register" value="Register" />
                            </div>
                        </div>
                    </div>

            }




        </div>
    )




}

export default Landing
