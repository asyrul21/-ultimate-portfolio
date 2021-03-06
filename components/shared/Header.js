import react from "react";
import Link from "next/link";
import cx from "classnames";

// import specific style here
import headerStyles from "./styles/header.module.scss";

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
              <a></a>
            </Link>
          </div>

          <div className={headerStyles.navItems}>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
            <Link href="/fitness">
              <a>Fitness</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
