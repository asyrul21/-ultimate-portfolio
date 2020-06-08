import React from 'react'
import Link from 'next/link'

import SuggestPagesStyles from './styles/SuggestPages.module.scss'

// takes two props: moreOn and pages
const SuggestPages = (props) => {
    return (
        <React.Fragment>
            <div className={SuggestPagesStyles.container}>
                <p className={SuggestPagesStyles.header}>
                    More on {props.moreOn} :
                </p>

                <p>
                    {
                        props.links.map((link, idx) => {
                            return (
                                <span key={idx}>
                                    <Link href={link.link}><a className={SuggestPagesStyles.link}>{link.text}</a></Link>
                                </span>
                            )
                        })
                    }
                </p>

            </div>
        </React.Fragment>
    )
}

export default SuggestPages

{/* <a key={id} className={SuggestPagesStyles.link} href={link} target="_blank">Video{id + 1}{'\t'}</a> */ }
