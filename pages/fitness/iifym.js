import React from 'react'
//import layout
import FitnessLayout from '../../components/layouts/FitnessLayout'
import ContentContainer from '../../components/layouts/ContentContainer'
import ContentFragment from '../../components/layouts/ContentFragment'
import cx from 'classnames'

// import components
import WorkoutContainer from '../../components/fitness/WorkoutContainer'
import WorkoutItem from '../../components/fitness/WorkoutItem'
import Disclaimer from '../../components/shared/disclaimer'
import WorkoutNotation from '../../components/fitness/WorkoutNotation'
import SuggestPages from '../../components/shared/SuggestPages'

//import data
import data from '../../public/static/data/FitnessItems/IIFYM.json'
import disc from '../../public/static/data/FitnessItems/disclaimer'

import Fade from 'react-reveal/Fade';

class Iifym extends React.Component {
    render() {
        const headerData = data.header;
        const keyIdeaData = data.keyidea;
        const calorieData = data.calorie;
        const macroData = data.macro;
        const designData = data.design;
        const suppData = data.supplements;
        const avoidData = data.avoid;
        return (
            <FitnessLayout>
                <ContentContainer breadcrumbs={['Fitness', 'iifym']}>
                    <Disclaimer text={disc.disclaimer} />
                    {/* Insert Fragments here */}
                    <ContentFragment title={headerData.title} text={headerData.text}>
                        {/* no photos */}
                    </ContentFragment>
                    <ContentFragment subtitle={keyIdeaData.title} text={keyIdeaData.text}>
                        {/* no photos */}
                    </ContentFragment>

                    {/* How much to eat */}
                    <ContentFragment
                        title={calorieData.title} text={calorieData.text}
                        link={calorieData.link} linkText="Read More"
                    >
                        {/* Photos */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoLandscape", "food1")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoLandscape", "food2")}></div>
                            </Fade>
                        </div>
                        {/* foods */}

                    </ContentFragment>

                    {/* Macro */}
                    <ContentFragment
                        title={macroData.title} text={macroData.text}
                        link={macroData.link} linkText="Read More"
                    >

                        {/* Photos */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoLandscape", "calc1")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoLandscape", "calc2")}></div>
                            </Fade>
                        </div>
                    </ContentFragment>

                    {/* Design */}
                    <ContentFragment
                        title={designData.title} text={designData.text}
                        link={designData.link} linkText="Read More"
                    >

                        {/* Photos */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoLandscape", "meal1")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoLandscape", "meal2")}></div>
                            </Fade>
                        </div>
                    </ContentFragment>

                    {/* Supplements */}
                    <ContentFragment
                        title={suppData.title} text={suppData.text}
                        link={suppData.link} linkText="Read More"
                    >

                        {/* Photos */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoPortrait", "protein1")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoLandscape", "protein2")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <div className={cx("rowPhotoPortrait", "protein3")}></div>
                            </Fade>
                        </div>
                    </ContentFragment>

                    {/* Closure */}
                    <ContentFragment title="Closure" text={data.closure}>
                        {/* no photos */}
                    </ContentFragment>

                    <SuggestPages moreOn="Fitness" links={[
                        {
                            link: '/fitness/generaldiet',
                            text: 'General Diet Guide'
                        },
                        {
                            link: '/fitness/hypertrophy',
                            text: 'Hypertrophy Programs'
                        },
                        {
                            link: '/fitness/fatloss',
                            text: 'Fat Loss Programs'
                        },
                        {
                            link: '/fitness/transformation',
                            text: 'My Transformation'
                        }
                    ]} />
                </ContentContainer>
                <style jsx>{`
                .food1 {
                    background-image: url('/static/images/fitness/diet/iifym/food3.jpg');
                }

                .food2 {
                    background-image: url('/static/images/fitness/diet/iifym/food2.jpg');
                }

                .calc1 {
                    background-image: url('/static/images/fitness/diet/iifym/calc1.jpg');
                }
                .calc2 {
                    background-image: url('/static/images/fitness/diet/iifym/calc2.jpg');
                }

                .meal1 {
                    background-image: url('/static/images/fitness/diet/iifym/meal1.jpg');
                }
                .meal2 {
                    background-image: url('/static/images/fitness/diet/iifym/meal2.jpg');
                }

                .protein1 {
                    background-image: url('/static/images/fitness/diet/iifym/protein1.jpg');
                }
                .protein2 {
                    background-image: url('/static/images/fitness/diet/iifym/protein2.jpg');
                }
                .protein3 {
                    background-image: url('/static/images/fitness/diet/iifym/protein3.jpg');
                }               

            `}</style>
            </FitnessLayout>
        )
    }
}

export default Iifym