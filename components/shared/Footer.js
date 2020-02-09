import react from 'react'
import Link from 'next/Link'
import cx from 'classnames'

// import specific style here
import footerStyles from './styles/footer.module.scss';

class Footer extends react.Component {
    render() {

        return (
            <div className={footerStyles.footer}>
                <div className={footerStyles.socmedContainer}>
                    <div className={footerStyles.socmed}><div className={footerStyles.insta}></div></div>
                    <div className={footerStyles.socmed}><div className={footerStyles.fb}></div></div>
                    <div className={footerStyles.socmed}><div className={footerStyles.email}></div></div>
                    <div className={footerStyles.socmed}><div className={footerStyles.linkedin}></div></div>
                    <div className={footerStyles.socmed}><div className={footerStyles.youtube}></div></div>
                </div>
                <div className={footerStyles.text}>
                    Asyrul Hafetzy Ahmad ©<span className={footerStyles.year}>2020</span>
                </div>
            </div>
        )
    }
}

export default Footer;