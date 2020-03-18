import react from 'react'
import cx from 'classnames'

import boxCategoryStyle from './styles/boxCategories.module.scss'

const BoxCategories = (props) => {
    return (
        <div className={boxCategoryStyle.categoriesContainer}>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>
            <div className={boxCategoryStyle.box}></div>

            {/* <div className={boxCategoryStyle.box}></div> */}
            {/* Countries go in here */}
        </div>
    )
}

export default BoxCategories;