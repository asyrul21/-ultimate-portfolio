import react from 'react'
import Link from 'next/Link'
import cx from 'classnames'

// import specific style here
import headerStyles from './styles/header.module.scss';

class Header extends react.Component {

    render() {
        // items in return block are JSX
        // React.Fragments can be used interchangeably with divs
        // divs are not always necessary
        return (
            <div className={cx(headerStyles.navBar, headerStyles.showNav)}>
                <div className={headerStyles.navLinks}>
                    <div className={headerStyles.Logo}>
                        <Link href="/">
                            <a className={headerStyles.innerLogo}></a>
                        </Link>
                    </div>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/projects"><a>Projects</a></Link>
                    <Link href="/fitness"><a>Fitness</a></Link>
                    <Link href="/travel"><a>Travel</a></Link>
                    <Link href="/blogs"><a>Blogs</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/projects"><a>Projects</a></Link>
                    <Link href="/fitness"><a>Fitness</a></Link>
                    <Link href="/blogs"><a>Blogs</a></Link>
                </div>

                <div className={headerStyles.login}>
                    <Link href="/"><a>Log In</a></Link>
                </div>
            </div>
        )
    }
}

export default Header