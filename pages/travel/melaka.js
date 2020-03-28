import react from 'react';
import cx from 'classnames'
import Head from 'next/head'

// import layouts
import ContentFragment from '../../components/layouts/ContentFragment'
import ContentContainer from '../../components/layouts/ContentContainer'
import TravelLayout from '../../components/layouts/TravelLayout'

//import data
import data from '../../public/static/data/TravelDestinations/melaka'

//React Reveal Animation
import Fade from 'react-reveal/Fade';

class Melaka extends react.Component {

    render() {
        return (
            <TravelLayout>
                <ContentContainer>
                    {/* Insert Fragments Here */}
                    <ContentFragment title={`${data.destination}, ${data.country}`}
                        time={data.time} text={data.intro}>

                        <Fade>
                            <div className="row">
                                <div className={cx("rowPhotoPortrait", "intro1")}></div>
                                <div className={cx("rowPhotoLandscape", "intro2")}></div>
                                <div className={cx("rowPhotoPortrait", "intro1")}></div>
                            </div>
                        </Fade>
                    </ContentFragment>
                    <ContentFragment subtitle="Transport"
                        text={data.transport}>

                        <Fade>
                            <div className="row">
                                <div className={cx("rowPhotoLandscape", "main1")}></div>
                                <div className={cx("rowPhotoLandscape", "main1")}></div>
                            </div>
                        </Fade>
                    </ContentFragment>
                    <ContentFragment subtitle="Hotel"
                        text={data.accommodation}>

                        <Fade>
                            <div className="row">
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                                <div className={cx("rowPhotoLandscape", "main1")}></div>
                            </div>
                        </Fade>
                    </ContentFragment>
                    <ContentFragment subtitle="Day 1"
                        text={data.day1}>
                    </ContentFragment>
                    <ContentFragment subtitle="Day 2"
                        text={data.day1}>

                        <Fade>
                            <div className="row">
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                                <div className={cx("rowPhotoLandscape", "main1")}></div>
                            </div>
                            <div className="row">
                                <div className={cx("rowPhotoLandscape", "main1")}></div>
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                            </div>
                        </Fade>

                    </ContentFragment>
                    <ContentFragment subtitle="Day 3"
                        text={data.day2}>
                        <Fade>
                            <div className="row">
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                                <div className={cx("rowPhotoLandscape", "main1")}></div>
                            </div>
                            <div className="row">
                                <div className={cx("rowPhotoLandscape", "main1")}></div>
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                            </div>
                        </Fade>
                    </ContentFragment>
                    <ContentFragment subtitle="Final Thoughts"
                        text={data.conclusion}>

                        <Fade>
                            <div className="row">
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                                <div className={cx("rowPhotoLandscape", "main1")}></div>
                            </div>
                            <div className="row">
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                                <div className={cx("rowPhotoPortrait", "main2")}></div>
                                <div className={cx("rowPhotoLandscape", "main1")}></div>
                            </div>
                        </Fade>
                    </ContentFragment>
                    {/* Optional if you have videos */}
                    {data.videos &&
                        <ContentFragment subtitle="Videos"
                            text="We recorded some videos:"
                            type="links" links={data.videos}>
                        </ContentFragment>
                    }
                </ContentContainer>
                <style jsx>{`
                     .intro1 {
                        background-image: url('/static/images/travel/melaka/intro1.png');
                    }
    
                    .intro2 {
                        background-image: url('/static/images/travel/melaka/intro2.png');
                    }

                    .main1 {
                        background-image: url('/static/images/travel/melaka/main1.png');
                    }
    
                    .main2 {
                        background-image: url('/static/images/travel/melaka/main2.png');
                    }
                `}</style>
            </TravelLayout>
        )
    }
}
export default Melaka;