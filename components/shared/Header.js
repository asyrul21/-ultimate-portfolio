import react from 'react'
import Link from 'next/Link'

// import specific style here
import headerStyles from './styles/header.module.scss';

class Header extends react.Component {

    render() {
        // items in return block are JSX
        // React.Fragments can be used interchangeably with divs
        // divs are not always necessary
        return (
            <react.Fragment>
                <Link href="/"><a>Index Page</a></Link>
                <Link href="/about"><a className={headerStyles.navLink}>About Page</a></Link>
                <Link href="/projects"><a className={headerStyles.navLink}>Projects Page</a></Link>
                <Link href="/fitness"><a className={headerStyles.navLink}>Fitness Page</a></Link>
                <Link href="/blogs"><a className={headerStyles.navLink}>Blogs Page</a></Link>
            </react.Fragment>
        )
    }
}

export default Header