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
import data from '../../public/static/data/FitnessItems/strength'
import disc from '../../public/static/data/FitnessItems/disclaimer'

import Fade from 'react-reveal/Fade';

class Strength extends React.Component {

    render() {
        const headerData = data.header;
        const keyIdeaData = data.keyidea;
        const fiveByfiveData = data.fivebyfive;
        const texasData = data.texasmethod;
        const stallData = data.stalling;
        return (
            <FitnessLayout>
                <ContentContainer breadcrumbs={['Fitness', 'Strength']}>
                    <Disclaimer text={disc.disclaimer} />
                    {/* Insert Fragments here */}
                    <ContentFragment title={headerData.title} text={headerData.text}>
                        {/* no photos */}
                    </ContentFragment>
                    <ContentFragment subtitle={keyIdeaData.title} text={keyIdeaData.text}>
                        {/* no photos */}
                    </ContentFragment>

                    <WorkoutNotation />

                    {/* 5 x 5 */}
                    <ContentFragment
                        title={fiveByfiveData.title}
                        text={fiveByfiveData.text}
                        link={fiveByfiveData.link}
                        linkText="Read More"
                    >
                        {/* Workouts */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Week A Day 1 (Monday)"
                                    notes="Rest between 90-180 seconds between sets."
                                    itemsPerRow={3}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="5x5" />
                                    <WorkoutItem name="BB Bench Press" sets="5x5" />
                                    <WorkoutItem name="BB Row" sets="5x5" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Week A Day 2 (Wednesday)"
                                    notes="Rest between 90-180 seconds between sets. For deadlifts start light then work your way up to 1 heavy set of 5."
                                    itemsPerRow={3}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="5x5" />
                                    <WorkoutItem name="Overhead BB Press" sets="5x5" />
                                    <WorkoutItem name="Deadlift" sets="1x5" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <WorkoutContainer
                                    title="Week A Day 3 (Friday)"
                                    notes="Rest between 90-180 seconds between sets."
                                    itemsPerRow={3}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="5x5" />
                                    <WorkoutItem name="BB Bench Press" sets="5x5" />
                                    <WorkoutItem name="BB Row" sets="5x5" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Week B Day 1 (Monday)"
                                    notes="Rest between 90-180 seconds between sets. For deadlifts start light then work your way up to 1 heavy set of 5."
                                    itemsPerRow={3}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="5x5" />
                                    <WorkoutItem name="Overhead BB Press" sets="5x5" />
                                    <WorkoutItem name="Deadlift" sets="1x5" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Week B Day 2 (Wednesday)"
                                    notes="Rest between 90-180 seconds between sets."
                                    itemsPerRow={3}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="5x5" />
                                    <WorkoutItem name="BB Bench Press" sets="5x5" />
                                    <WorkoutItem name="BB Row" sets="5x5" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <WorkoutContainer
                                    title="Week B Day 3 (Friday)"
                                    notes="Rest between 90-180 seconds between sets. For deadlifts start light then work your way up to 1 heavy set of 5."
                                    itemsPerRow={3}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="5x5" />
                                    <WorkoutItem name="Overhead BB Press" sets="5x5" />
                                    <WorkoutItem name="Deadlift" sets="1x5" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                    </ContentFragment>

                    {/* Texas Method */}
                    <ContentFragment
                        title={texasData.title}
                        text={texasData.text}
                        link={texasData.link}
                        linkText="Read More"
                    >
                        {/* Workouts */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Week A Volume Day (Monday)"
                                    notes="Rest between 90-180 seconds between sets."
                                    itemsPerRow={3}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="5x5@90%5RM" />
                                    <WorkoutItem name="BB Bench Press" sets="5x5@90%5RM" />
                                    <WorkoutItem name="BB Row" sets="5x5@90%5RM" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Week A Recovery Day (Wednesday)"
                                    notes="Rest between 90-180 seconds between sets. * at slightly lighter weight than previous Overhead BB Press weight."
                                    itemsPerRow={3}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="2x5@80% of  Monday" />
                                    <WorkoutItem name="Overhead BB Press" sets="3x5*" />
                                    <WorkoutItem name="Chin ups" sets="3xMax effort" />
                                    <WorkoutItem name="Back Hyperextensions" sets="5x10" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <WorkoutContainer
                                    title="Week A PR Day (Friday)"
                                    notes="Warm up, then work up to one set of 5 reps. Must be slightly heavier than last week's (new PR)."
                                    itemsPerRow={3}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="1x5" />
                                    <WorkoutItem name="BB Bench Press" sets="1x5" />
                                    <WorkoutItem name="Deadlifts" sets="1x5" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Week B Volume Day (Monday)"
                                    notes="Rest between 90-180 seconds between sets."
                                    itemsPerRow={3}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="5x5@90%5RM" />
                                    <WorkoutItem name="Overhead BB Press" sets="5x5@90%5RM" />
                                    <WorkoutItem name="BB Row" sets="5x5@90%5RM" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Week B Recovery Day (Wednesday)"
                                    notes="Rest between 90-180 seconds between sets. * at slightly lighter weight than previous BB Bench Press weight."
                                    itemsPerRow={3}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="2x5@80% of  Monday" />
                                    <WorkoutItem name="BB Bench Press" sets="3x5*" />
                                    <WorkoutItem name="Chin ups" sets="3xMax effort" />
                                    <WorkoutItem name="Back Hyperextensions" sets="5x10" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <WorkoutContainer
                                    title="Week B PR Day (Friday)"
                                    notes="Warm up, then work up to one set of 5 reps. Must be slightly heavier than last week's (new PR)."
                                    itemsPerRow={3}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="1x5" />
                                    <WorkoutItem name="Overhead BB Press" sets="1x5" />
                                    <WorkoutItem name="Deadlift" sets="1x5" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                    </ContentFragment>
                    {/* Texas Method */}
                    <ContentFragment
                        title={stallData.title}
                        text={stallData.text}
                        link={stallData.link}
                        linkText="Read More"
                    >
                        {/* Workouts */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="What you should do"
                                    itemsPerRow={2}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Deloading" />
                                    <WorkoutItem name="Program modification" />
                                    <WorkoutItem name="Lengthen Improvement Frequency (Madcow)" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="What you should NOT do"
                                    itemsPerRow={2}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Continue with poor form" />
                                    <WorkoutItem name="Reduce range of motion" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                    </ContentFragment>
                    <ContentFragment title="Closure" text={data.closure}>
                        {/* no photos */}
                    </ContentFragment>

                    <SuggestPages moreOn="Fitness" links={[
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
                        },
                        {
                            link: '/fitness/iifym',
                            text: 'The IIFYM Diet'
                        }
                    ]} />
                </ContentContainer>
            </FitnessLayout>
        )
    }
}

export default Strength;

