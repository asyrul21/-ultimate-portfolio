import react from 'react'

//import layout
import ContentFragment from '../layouts/ContentFragment'
import cx from 'classnames'

//React Reveal Animation
import Fade from 'react-reveal/Fade';

const ItemRace = (props) => {
    const item = props.data
    return (
        <react.Fragment>
            <ContentFragment title={item.title}
                time={item.time} text={item.intro}>

                {/* Photos */}
                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoLandscape", "intro1")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoPortrait", "intro2")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={400}>
                        <div className={cx("rowPhotoPortrait", "intro3")}></div>
                    </Fade>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="The Viper Challenge 2018 (5KM Dry)"
                text={item.main1}>

                {/* Photos */}
                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoPortrait", "viper1")}></div>
                    </Fade>

                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoPortrait", "viper2")}></div>
                    </Fade>

                    <Fade bottom distance='20px' delay={400}>
                        <div className={cx("rowPhotoLandscape", "viper3")}></div>
                    </Fade>
                </div>
                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoLandscape", "viper4")}></div>
                    </Fade>

                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoPortrait", "viper5")}></div>
                    </Fade>

                    <Fade bottom distance='20px' delay={400}>
                        <div className={cx("rowPhotoPortrait", "viper6")}></div>
                    </Fade>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="CIMB Bank Color Run 2017 (5KM)"
                text={item.main2}>

                {/* Photos */}
                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoPortrait", "color1")}></div>
                    </Fade>

                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoLandscape", "color2")}></div>
                    </Fade>

                    <Fade bottom distance='20px' delay={400}>
                        <div className={cx("rowPhotoPortrait", "color3")}></div>
                    </Fade>

                </div>
            </ContentFragment>

            <ContentFragment subtitle="Standard Charted Half Marathon 21KM 2016"
                text={item.main3}>

                {/* Photos */}
                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoLandscape", "schkm1")}></div>
                    </Fade>

                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoLandscape", "schkm2")}></div>
                    </Fade>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Closure"
                text={item.closure}>
                {/* No Photos */}
            </ContentFragment>
            <style jsx>{`
                .intro1 {
                    background-image: url('/static/images/fitness/achievements/races/first.jpg');
                }

                .intro2 {
                    background-image: url('/static/images/fitness/achievements/races/finish2.jpg');
                }

                .intro3 {
                    background-image: url('/static/images/fitness/achievements/races/finish3.jpg');
                }

                .viper1 {
                    background-image: url('/static/images/fitness/achievements/races/viper1.jpg');
                }

                .viper2 {
                    background-image: url('/static/images/fitness/achievements/races/viper2.jpg');
                }

                .viper3 {
                    background-image: url('/static/images/fitness/achievements/races/viper3.jpg');
                }

                .viper4 {
                    background-image: url('/static/images/fitness/achievements/races/viper6.jpg');
                }

                .viper5 {
                    background-image: url('/static/images/fitness/achievements/races/viper4.jpg');
                }

                .viper6 {
                    background-image: url('/static/images/fitness/achievements/races/viper5.jpg');
                }

                .color1 {
                    background-image: url('/static/images/fitness/achievements/races/color1.jpg');
                }

                .color2 {
                    background-image: url('/static/images/fitness/achievements/races/color2.jpg');
                }

                .color3 {
                    background-image: url('/static/images/fitness/achievements/races/color4.jpg');
                }

                .schkm1 {
                    background-image: url('/static/images/fitness/achievements/races/schkm.jpg');
                }

                .schkm2 {
                    background-image: url('/static/images/fitness/achievements/races/schkm1.jpg');
                }

            `}</style>
        </react.Fragment >
    )
}

export default ItemRace;