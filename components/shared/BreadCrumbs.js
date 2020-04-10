import react from 'react'
import Link from 'next/link'

import bcStyles from './styles/breadcrumbs.module.scss'

const BreadCrumbs = (props) => {
    let path = '';
    return (
        <div className={bcStyles.bcContainer}>
            <p className={bcStyles.breadcrumb}>
                {props.slugs.map((item, idx) => {
                    path += `/${item.toLowerCase()}`;
                    // console.log(path);
                    return (
                        <react.Fragment key={idx}>
                            {idx === props.slugs.length - 1 ? (
                                <span className={bcStyles.active}>{item}</span >
                            ) :
                                (
                                    <react.Fragment>
                                        <Link key={idx} href={path}><a href={path} className={bcStyles.links}>{item}</a></Link>{' '}> {' '}
                                    </react.Fragment>
                                )
                            }
                        </react.Fragment>
                    )
                })
                }
            </p>
        </div >
    )
}

export default BreadCrumbs;