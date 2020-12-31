import react from 'react';
import cx from 'classnames'
import Head from 'next/head'

// import layouts
import ContentFragment from '../../components/layouts/ContentFragment'
import ContentContainer from '../../components/layouts/ContentContainer'
import TravelLayout from '../../components/layouts/TravelLayout'
import SuggestPages from '../../components/shared/SuggestPages'

//import data
import data from '../../public/static/data/TravelDestinations/pd'

//React Reveal Animation
import Fade from 'react-reveal/Fade';

class PD extends react.Component {

    render() {
        return (
            <TravelLayout>
                <ContentContainer breadcrumbs={['Travel', 'PD']}>
                    {/* Insert Fragments Here */}
                    < ContentFragment title={`${data.destination}, ${data.country}`}
                        time={data.time} text={data.intro}>

                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoLandscape", "intro1")}></div>
                            </Fade>

                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoLandscape", "intro2")}></div>
                            </Fade>

                        </div>
                    </ContentFragment>
                    <ContentFragment subtitle="Transport"
                        text={data.transport}>
                    </ContentFragment>
                    <ContentFragment subtitle="Accommodation"
                        text={data.accommodation}>

                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoPortrait", "hotel1")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoLandscape", "hotel2")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <div className={cx("rowPhotoPortrait", "hotel3")}></div>
                            </Fade>
                        </div>
                    </ContentFragment>
                    <ContentFragment subtitle="Activity Day 1"
                        text={data.day1}>

                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoPortrait", "activity1")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoPortrait", "activity2")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <div className={cx("rowPhotoLandscape", "activity3")}></div>
                            </Fade>
                        </div>
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoLandscape", "activity4")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoPortrait", "activity5")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <div className={cx("rowPhotoPortrait", "activity6")}></div>
                            </Fade>
                        </div>

                    </ContentFragment>
                    <ContentFragment subtitle="Activity Day 2"
                        text={data.day2}>
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoPortrait", "activity7")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoPortrait", "activity8")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <div className={cx("rowPhotoPortrait", "activity9")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={600}>
                                <div className={cx("rowPhotoPortrait", "activity10")}></div>
                            </Fade>
                        </div>
                    </ContentFragment>
                    <ContentFragment subtitle="Final Thoughts"
                        text={data.conclusion}>

                    </ContentFragment>

                    <SuggestPages moreOn="Travel" links={[
                        {
                            link: '/travel/krabi',
                            text: 'Krabi, Thailand'
                        },
                        {
                            link: '/travel/colmargenting',
                            text: 'Bukit Tinggi - Genting, Pahang'
                        },
                        {
                            link: '/travel/sarangthistle',
                            text: 'Short Family Getaway at Sarang and Thistle'
                        },
                        {
                            link: '/travel/manchester',
                            text: 'Manchester, UK'
                        }
                    ]} />
                </ContentContainer>
                <style jsx>{`
                    .intro1 {
                        background-image: url('/static/images/travel/pd/pd1.jpg');
                    }
    
                    .intro2 {
                        background-image: url('/static/images/travel/pd/pd2.jpg');
                    }

                    .hotel1 {
                        background-image: url('/static/images/travel/pd/room2.jpg');
                    }
    
                    .hotel2 {
                        background-image: url('/static/images/travel/pd/room3.jpg');
                    }

                    .hotel3 {
                        background-image: url('/static/images/travel/pd/room4.jpeg');
                    }

                    .activity1 {
                        background-image: url('/static/images/travel/pd/activity1.jpg');
                    }
    
                    .activity2 {
                        background-image: url('/static/images/travel/pd/activity2.jpg');
                    }

                    .activity3 {
                        background-image: url('/static/images/travel/pd/activity4.jpg');
                    }

                    .activity4 {
                        background-image: url('/static/images/travel/pd/activity9.jpeg');
                    }
    
                    .activity5 {
                        background-image: url('/static/images/travel/pd/activity3.jpg');
                    }

                    .activity6 {
                        background-image: url('/static/images/travel/pd/activity11.jpg');
                    }

                    .activity7 {
                        background-image: url('/static/images/travel/pd/activity7.jpg');
                    }
    
                    .activity8 {
                        background-image: url('/static/images/travel/pd/activity8.jpg');
                    }

                    .activity9 {
                        background-image: url('/static/images/travel/pd/activity5.jpg');
                    }

                    .activity10 {
                        background-image: url('/static/images/travel/pd/activity6.jpg');
                    }
                `}</style>
            </TravelLayout >
        )
    }
}
export default PD;