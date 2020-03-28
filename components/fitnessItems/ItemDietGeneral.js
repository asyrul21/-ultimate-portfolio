import react from 'react'

//import layout
import ContentFragment from '../layouts/ContentFragment'

import cx from 'classnames'

//import style
// import rpiStyles from './rpi.module.scss'

const ItemDietGeneral = (props) => {
    const item = props.data
    return (
        <react.Fragment>
            <ContentFragment title={item.title}
                time={item.time} text={item.intro}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhotoPortrait", "intro1")}></div>
                    <div className={cx("rowPhotoPortrait", "intro1")}></div>
                    <div className={cx("rowPhotoLandscape", "intro2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Main Development"
                text={item.main1}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Technology"
                text={item.main2}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                </div>
                <div className="row">
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Results"
                text={item.closure}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhotoLandscape", "main1")}></div>
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                    <div className={cx("rowPhotoPortrait", "main2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Placement Text"
                text={item.main1}>
                {/* No Photos */}
            </ContentFragment>
            <ContentFragment subtitle="Placement Text"
                text={item.main1}>
                {/* No Photos */}
            </ContentFragment>
            <style jsx>{`
                .intro1 {
                    background-image: url('/static/images/fitness/achievements/transformation/intro1.png');
                }

                .intro2 {
                    background-image: url('/static/images/fitness/achievements/transformation/intro2.png');
                }

                .main1 {
                    background-image: url('/static/images/fitness/achievements/transformation/main1.png');
                }

                .main2 {
                    background-image: url('/static/images/fitness/achievements/transformation/main2.png');
                }

            `}</style>
        </react.Fragment >
    )
}

export default ItemDietGeneral;