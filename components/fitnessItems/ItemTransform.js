import react from 'react'

//import layout
import ContentFragment from '../layouts/ContentFragment'
import cx from 'classnames'

import Fade from 'react-reveal/Fade';

const ItemTransform = (props) => {
    const item = props.data
    return (
        <react.Fragment>
            <ContentFragment title={item.title}
                time={item.time} text={item.intro}>

                {/* Photos */}
                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoPortrait", "intro1")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoPortrait", "intro2")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={400}>
                        <div className={cx("rowPhotoLandscape", "intro3")}></div>
                    </Fade>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Bulking Phases"
                text={item.main1}>

                {/* Photos */}
                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoLandscape", "bulk1")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoPortrait", "bulk2")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={400}>
                        <div className={cx("rowPhotoPortrait", "bulk3")}></div>
                    </Fade>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Transformation"
                text={item.main2}>

                {/* Photos */}
                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoPortrait", "transform1")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoPortrait", "transform2")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={400}>
                        <div className={cx("rowPhotoPortrait", "transform3")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={600}>
                        <div className={cx("rowPhotoPortrait", "transform4")}></div>
                    </Fade>
                </div>
                <div className="row">
                    <Fade bottom distance='20px' delay={800}>
                        <div className={cx("rowPhotoPortrait", "transform5")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={1000}>
                        <div className={cx("rowPhotoPortrait", "transform6")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={1200}>
                        <div className={cx("rowPhotoPortrait", "transform7")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={1400}>
                        <div className={cx("rowPhotoPortrait", "transform8")}></div>
                    </Fade>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Maintenance"
                text={item.maintenance}>

                {/* Photos */}
                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoPortrait", "maintain1")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoPortrait", "maintain2")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={400}>
                        <div className={cx("rowPhotoPortrait", "maintain3")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={600}>
                        <div className={cx("rowPhotoPortrait", "maintain4")}></div>
                    </Fade>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Closure"
                text={item.closure}>
                {/* No Photos */}
            </ContentFragment>
            <style jsx>{`
                .intro1 {
                    background-image: url('/static/images/fitness/achievements/transformation/skinny2.jpeg');
                }

                .intro2 {
                    background-image: url('/static/images/fitness/achievements/transformation/skinny3.jpeg');
                }

                .intro3 {
                    background-image: url('/static/images/fitness/achievements/transformation/skinny1.jpg');
                }

                .bulk1 {
                    background-image: url('/static/images/fitness/achievements/transformation/bulk1.jpg');
                }

                .bulk2{
                    background-image: url('/static/images/fitness/achievements/transformation/bulk2.jpg');
                }
                .bulk3{
                    background-image: url('/static/images/fitness/achievements/transformation/bulk3.jpg');
                }

                .transform1{
                    background-image: url('/static/images/fitness/achievements/transformation/transform1.jpg');
                }
                .transform2{
                    background-image: url('/static/images/fitness/achievements/transformation/transform2.jpg');
                }
                .transform3{
                    background-image: url('/static/images/fitness/achievements/transformation/transform3.jpg');
                }
                .transform4{
                    background-image: url('/static/images/fitness/achievements/transformation/transform4.jpg');
                }
                .transform5{
                    background-image: url('/static/images/fitness/achievements/transformation/transform5.jpg');
                }
                .transform6{
                    background-image: url('/static/images/fitness/achievements/transformation/transform6.jpg');
                }
                .transform7{
                    background-image: url('/static/images/fitness/achievements/transformation/transform7.jpg');
                }
                .transform8{
                    background-image: url('/static/images/fitness/achievements/transformation/transform8.jpg');
                }
                .maintain1{
                    background-image: url('/static/images/fitness/achievements/transformation/maintenance1.jpg');
                }
                .maintain2{
                    background-image: url('/static/images/fitness/achievements/transformation/maintenance2.jpeg');
                }
                .maintain3{
                    background-image: url('/static/images/fitness/achievements/transformation/maintenance3.jpg');
                }
                .maintain4{
                    background-image: url('/static/images/fitness/achievements/transformation/maintenance4.jpg');
                }

            `}</style>
        </react.Fragment >
    )
}

export default ItemTransform;