import react from 'react'
import cx from 'classnames'
import Link from 'next/link'

import boxCategoryStyle from './styles/boxCategories.module.scss'

const BoxCategories = (props) => {
    return (
        <div className={boxCategoryStyle.categoriesContainer}>
            {
                props.data.travel.slugs.map((item, idx) => {
                    return (
                        <div key={idx} className={boxCategoryStyle.box} style={{
                            backgroundImage: 'url(' + item.slugImage + ')',
                        }}>
                            <Link href={`travel/${item.key}`}>
                                <a className={boxCategoryStyle.darkBackground} >
                                    {/* <div className={boxCategoryStyle.darkBackground}> */}
                                    < div className={boxCategoryStyle.textContainer} >
                                        <h3>{item.destination}</h3>
                                        <p>{item.country}</p>
                                    </div>
                                    {/* </div> */}
                                </a >
                            </Link>
                        </div >
                    )
                })
            }
        </div >
    )
}

export default BoxCategories;