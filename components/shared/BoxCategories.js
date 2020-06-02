import react from 'react'
import cx from 'classnames'
import Link from 'next/link'

import boxCategoryStyle from './styles/boxCategories.module.scss'

import Fade from 'react-reveal/Fade';

// accepts an array of slug data
const BoxCategories = (props) => {
    let delay = 0
    return (
        <div className={boxCategoryStyle.categoriesContainer}>
            {
                props.data.map((item, idx) => {
                    if (idx !== 0)
                        delay += 200
                    return (
                        <Fade delay={delay}>
                            <div key={idx} className={boxCategoryStyle.box} style={{
                                backgroundImage: 'url(' + item.slugImage + ')',
                            }}>
                                <Link href={`${props.page}/${item.key}`}>
                                    <a className={boxCategoryStyle.darkBackground} >
                                        {/* <div className={boxCategoryStyle.darkBackground}> */}
                                        < div className={boxCategoryStyle.textContainer} >
                                            <h3>{item.title}</h3>
                                            <p className={boxCategoryStyle.sub}>{item.sub}</p>
                                        </div>
                                        {/* </div> */}
                                    </a >
                                </Link>
                            </div >
                        </Fade>
                    )
                })
            }
        </div >
    )
}

export default BoxCategories;