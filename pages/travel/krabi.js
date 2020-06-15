import react from 'react';
import cx from 'classnames'
import Head from 'next/head'

// import layouts
import ContentFragment from '../../components/layouts/ContentFragment'
import ContentContainer from '../../components/layouts/ContentContainer'
import TravelLayout from '../../components/layouts/TravelLayout'
import SuggestPages from '../../components/shared/SuggestPages'

//import data
import data from '../../public/static/data/TravelDestinations/krabi'

//React Reveal Animation
import Fade from 'react-reveal/Fade';

class Krabi extends react.Component {

    render() {
        return (
            <TravelLayout>
                <ContentContainer breadcrumbs={['Travel', 'Krabi']}>
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
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoLandscape", "transport1")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoPortrait", "transport2")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <div className={cx("rowPhotoPortrait", "transport3")}></div>
                            </Fade>

                        </div>
                    </ContentFragment>
                    <ContentFragment subtitle="Accommodation"
                        text={data.accommodation}>

                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoLandscape", "hotel1")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoLandscape", "hotel2")}></div>
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
                                <div className={cx("rowPhotoPortrait", "activity4")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoLandscape", "activity5")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <div className={cx("rowPhotoPortrait", "activity6")}></div>
                            </Fade>
                        </div>

                    </ContentFragment>
                    <ContentFragment subtitle="Day 2"
                        text={data.day2}>
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoLandscape", "activity7")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoPortrait", "activity8")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <div className={cx("rowPhotoPortrait", "activity9")}></div>
                            </Fade>
                        </div>
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoLandscape", "activity10")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoLandscape", "activity11")}></div>
                            </Fade>
                        </div>
                    </ContentFragment>
                    <ContentFragment subtitle="Final Thoughts"
                        text={data.conclusion}>

                    </ContentFragment>

                    <SuggestPages moreOn="Travel" links={[
                        {
                            link: '/travel/pd',
                            text: 'Port Dickson'
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
                        background-image: url('/static/images/travel/krabi/beach1.jpg');
                    }
    
                    .intro2 {
                        background-image: url('/static/images/travel/krabi/beach7.jpg');
                    }

                    .transport1 {
                        background-image: url('/static/images/travel/krabi/activity8.jpg');
                    }
    
                    .transport2 {
                        background-image: url('/static/images/travel/krabi/arrival1.jpg');
                    }

                    .transport3 {
                        background-image: url('/static/images/travel/krabi/activity9.jpg');
                    }

                    .hotel1 {
                        background-image: url('/static/images/travel/krabi/room3.jpg');
                    }
    
                    .hotel2 {
                        background-image: url('/static/images/travel/krabi/room1.jpg');
                    }

                    .activity1 {
                        background-image: url('/static/images/travel/krabi/beach5.jpg');
                    }
    
                    .activity2 {
                        background-image: url('/static/images/travel/krabi/activity1.jpg');
                    }

                    .activity3 {
                        background-image: url('/static/images/travel/krabi/activity2.jpg');
                    }

                    .activity4 {
                        background-image: url('/static/images/travel/krabi/beach2.jpg');
                    }
    
                    .activity5 {
                        background-image: url('/static/images/travel/krabi/beach3.jpg');
                    }

                    .activity6 {
                        background-image: url('/static/images/travel/krabi/beach4.jpg');
                    }

                    .activity7 {
                        background-image: url('/static/images/travel/krabi/activity4.jpg');
                    }
    
                    .activity8 {
                        background-image: url('/static/images/travel/krabi/activity3.jpg');
                    }

                    .activity9 {
                        background-image: url('/static/images/travel/krabi/activity6.jpg');
                    }

                    .activity10 {
                        background-image: url('/static/images/travel/krabi/activity5.jpg');
                    }

                    .activity11 {
                        background-image: url('/static/images/travel/krabi/activity7.jpg');
                    }
                `}</style>
            </TravelLayout >
        )
    }
}
export default Krabi;