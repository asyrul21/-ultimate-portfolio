import react from 'react'

//import layout
import ContentFragment from '../../layouts/ContentFragment'

import cx from 'classnames'

//import style
// import rpiStyles from './rpi.module.scss'

const ItemTransform = (props) => {
    const item = props.data
    return (
        <react.Fragment>
            <ContentFragment title={item.title}
                time={item.time} text={item.intro}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhoto", "intro1")}></div>
                    <div className={cx("rowPhoto", "intro2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Main Development"
                text={item.main1}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Technology"
                text={item.main2}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Results"
                text={item.closure}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhoto", "main1")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
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
                    flex: 0.18;
                    background-image: url('/static/images/fitness/achievements/transformation/intro1.png');
                }

                .intro2 {
                    flex: 0.80;
                    background-image: url('/static/images/fitness/achievements/transformation/intro2.png');
                }

                .main1 {
                    flex: 0.56;
                    background-image: url('/static/images/fitness/achievements/transformation/main1.png');
                }

                .main2 {
                    flex: 0.20;
                    background-image: url('/static/images/fitness/achievements/transformation/main2.png');
                }

            `}</style>
        </react.Fragment >
    )
}

export default ItemTransform;