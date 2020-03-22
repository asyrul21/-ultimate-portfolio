import react from 'react'
import Link from 'next/link'
import cx from 'classnames'

// import specific style here
import footerStyles from './styles/footer.module.scss';

class Footer extends react.Component {
    render() {

        return (
            <div className={footerStyles.footer}>
                <div className={footerStyles.socmedContainer}>
                    {/* <div className={footerStyles.socmed}> */}
                    <a href="https://www.instagram.com/?hl=en" target="_blank" className={footerStyles.link}>
                        <div className={footerStyles.socmed}>
                            <div className={footerStyles.insta}></div>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/asyrulahmad21" target="_blank" className={footerStyles.link}>
                        <div className={footerStyles.socmed}>
                            <div className={footerStyles.fb}></div>
                        </div>
                    </a>
                    <a href="mailto:asyrulhafetzy.21@gmail.com" target="_blank" className={footerStyles.link}>
                        <div className={footerStyles.socmed}>
                            <div className={footerStyles.email}></div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/asyrul-ahmad/" target="_blank" className={footerStyles.link}>
                        <div className={footerStyles.socmed}>
                            <div className={footerStyles.linkedin}></div>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCiwjg5UyOX3KCqv1De2jA2w" target="_blank" className={footerStyles.link}>
                        <div className={footerStyles.socmed}>
                            <div className={footerStyles.youtube}></div>
                        </div>
                    </a>
                </div>
                <div className={footerStyles.text}>
                    Asyrul Hafetzy Ahmad ©<span className={footerStyles.year}>2020</span>
                </div>
            </div>
        )
    }
}

export default Footer;