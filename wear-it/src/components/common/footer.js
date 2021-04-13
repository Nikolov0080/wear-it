import React from 'react'
import style from './css/footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.brand}>
                wear it
           </div>
            <hr />
            <div className={style.copyR}>
                <span>Copyright &#169; All Rights Received</span>
            </div>
        </footer>
    )
}

export default Footer;