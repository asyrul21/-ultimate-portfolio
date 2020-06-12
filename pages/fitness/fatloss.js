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
import data from '../../public/static/data/FitnessItems/fatloss'
import disc from '../../public/static/data/FitnessItems/disclaimer'

import Fade from 'react-reveal/Fade';

class fatloss extends React.Component {
    render() {
        const headerData = data.header;
        const keyIdeaData = data.keyidea;
        const hiitData = data.hiit;
        const hiCardioData = data.hicardio;
        const circuitData = data.circuits;
        const barbellComplexData = data.bbcomplex;

        return (
            <FitnessLayout>
                <ContentContainer breadcrumbs={['Fitness', 'Fatloss']}>
                    <Disclaimer text={disc.disclaimer} />
                    {/* Insert Fragments here */}
                    <ContentFragment title={headerData.title} text={headerData.text}>
                        {/* no photos */}
                    </ContentFragment>
                    <ContentFragment subtitle={keyIdeaData.title} text={keyIdeaData.text}>
                        {/* no photos */}
                    </ContentFragment>

                    <WorkoutNotation />

                    {/* HIIT */}
                    <ContentFragment
                        title={hiitData.title}
                        text={hiitData.text}
                        link={hiitData.link}
                        linkText="Read More"
                    >

                        {/* Workouts */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Suggestion 1 (Treadmill/Bike) : Easy"
                                    notes="For the rest times you need to observe the timer on your treadmill. Hence, be prepared to do some calculations in your mind as well!"
                                    itemsPerRow={2}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warm ups" sets="1:1x4 of 1min" />
                                    <WorkoutItem name="Work sets (increased speed)" sets="1:1x10 of 1min" />
                                    <WorkoutItem name="Warm down (speed back down)" sets="1:1x4 of 1 min" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Suggestion 2 (Treadmill/Bike) : Advanced"
                                    notes="For the rest times you need to observe the timer on your treadmill. Hence, be prepared to do some calculations in your mind as well!"
                                    itemsPerRow={2}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warm ups" sets="1:1x5 of 1min" />
                                    <WorkoutItem name="Work sets (increased speed)" sets="2:1x12 of 30secs" />
                                    <WorkoutItem name="Super Work sets" sets="4:1x3 of 30secs" />
                                    <WorkoutItem name="Warm down (speed back down)" sets="1:1x4 of 1 min" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                    </ContentFragment>


                    {/* HICardio */}
                    <ContentFragment
                        title={hiCardioData.title}
                        text={hiCardioData.text}
                        link={hiCardioData.link}
                        linkText="Read More"
                    >
                    </ContentFragment>

                    {/* Circuits */}
                    <ContentFragment
                        title={circuitData.title}
                        text={circuitData.text}
                        link={circuitData.link}
                        linkText="Read More"
                    >
                        {/* Workouts */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Circuit Suggestion 1: Medium Intensity"
                                    notes="Rest for 10 secs between workouts, 1-2 minutes between circuits. Attempt to repeat the circuit 3-4 times. Adjust the reps accordingly."
                                    itemsPerRow={2}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warm ups (any light workouts)" sets="2x10" />
                                    <WorkoutItem name="Squats" sets="20" />
                                    <WorkoutItem name="Jump Jacks" sets="15" />
                                    <WorkoutItem name="Pushups" sets="10" />
                                    <WorkoutItem name="Stationary Lunges" sets="10pairs" />
                                    <WorkoutItem name="Mountain Climbers" sets="20" />
                                    <WorkoutItem name="Plank" sets="45secs" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Circuit Suggestion 2: Medium Intensity"
                                    notes="Rest for 10 secs between workouts, 1-2 minutes between circuits. Attempt to repeat the circuit 3-4 times. Adjust the reps accordingly."
                                    itemsPerRow={2}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warm ups (any light workouts)" sets="2x10" />
                                    <WorkoutItem name="Jump Squats" sets="10" />
                                    <WorkoutItem name="Pushups" sets="15" />
                                    <WorkoutItem name="Split Squats" sets="20pairs" />
                                    <WorkoutItem name="Plank to Pushups" sets="10pairs" />
                                    <WorkoutItem name="Mountain Climbers" sets="20" />
                                    <WorkoutItem name="Crunches" sets="15" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Circuit Suggestion 3: High Intensity"
                                    notes="Rest for 10 secs between workouts, 1-2 minutes between circuits. Attempt to repeat the circuit 3-4 times. Adjust the reps accordingly. If you are unable to reach the target reps, rest for a few seconds and resume, until you complete those reps before moving on to the next workout."
                                    itemsPerRow={2}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Warm ups (any light workouts)" sets="2x10" />
                                    <WorkoutItem name="Squats" sets="20" />
                                    <WorkoutItem name="Incline Pushups" sets="15" />
                                    <WorkoutItem name="Split Squats" sets="20pairs" />
                                    <WorkoutItem name="Pushups" sets="10" />
                                    <WorkoutItem name="Bicep Curls" sets="12pairs" />
                                    <WorkoutItem name="Crunches" sets="15" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Circuit Suggestion 4: High Intensity"
                                    notes="Rest for 10 secs between workouts, 1-2 minutes between circuits. Attempt to repeat the circuit 3-4 times. Adjust the reps accordingly. If you are unable to reach the target reps, rest for a few seconds and resume, until you complete those reps before moving on to the next workout."
                                    itemsPerRow={2}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Warm ups (any light workouts)" sets="2x10" />
                                    <WorkoutItem name="Jump Squats" sets="10" />
                                    <WorkoutItem name="Pike Pushups" sets="10" />
                                    <WorkoutItem name="Jump Squats" sets="10" />
                                    <WorkoutItem name="Pushups" sets="10" />
                                    <WorkoutItem name="Mountain Climbers" sets="20" />
                                    <WorkoutItem name="Plank" sets="45secs" />
                                    <WorkoutItem name="Crunches" sets="15" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Circuit Suggestion 3 (w/ equipment): High Intensity"
                                    notes="Rest for 10 secs between workouts, 1-2 minutes between circuits. Attempt to repeat the circuit 3-4 times. Adjust the reps accordingly."
                                    itemsPerRow={2}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Warm ups (any light workouts)" sets="2x10" />
                                    <WorkoutItem name="BB Squats" sets="10" />
                                    <WorkoutItem name="Pushups" sets="20" />
                                    <WorkoutItem name="Walking Lunges" sets="10pairs" />
                                    <WorkoutItem name="Standing DB Press" sets="10" />
                                    <WorkoutItem name="Cable Crunches" sets="10" />
                                    <WorkoutItem name="Plank" sets="1min" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Circuit Suggestion 4 (w/ equipment): High Intensity"
                                    notes="This circuit focuses on the upper body and hamstring. Rest for 10 secs between workouts, 1-2 minutes between circuits. Attempt to repeat the circuit 3-4 times. Adjust the reps accordingly."
                                    itemsPerRow={2}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Warm ups (any light workouts)" sets="2x10" />
                                    <WorkoutItem name="Deadlifts" sets="10" />
                                    <WorkoutItem name="Cable Lat Pulldowns" sets="10" />
                                    <WorkoutItem name="Bench Press" sets="10" />
                                    <WorkoutItem name="BB Rows" sets="10" />
                                    <WorkoutItem name="Diamond Pushups" sets="10" />
                                    <WorkoutItem name="BB/DB Bicep Curls" sets="10" />
                                </WorkoutContainer>
                            </Fade>

                        </div>
                    </ContentFragment>
                    {/* BB Complex */}
                    <ContentFragment
                        title={barbellComplexData.title}
                        text={barbellComplexData.text}
                        link={barbellComplexData.link}
                        linkText="Read More"
                    >

                        {/* Workouts */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Complex 1"
                                    notes="Rest for 10 secs between workouts, 1-2 minutes between circuits. Attempt to repeat the complex 3-4 times. Adjust the reps accordingly."
                                    itemsPerRow={2}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warm ups" sets="10-15mins" />
                                    <WorkoutItem name="BB Squats" sets="8" />
                                    <WorkoutItem name="BB Overhead Press" sets="8" />
                                    <WorkoutItem name="BB Rows" sets="8" />
                                    <WorkoutItem name="Deadlifts" sets="8" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Complex 2"
                                    notes="Rest for 10 secs between workouts, 1-2 minutes between circuits. Attempt to repeat the complex 3-4 times. Adjust the reps accordingly. For the BB Walking Lunges you might want to reduce the load."
                                    itemsPerRow={2}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warm ups" sets="10-15mins" />
                                    <WorkoutItem name="Deadlifts" sets="8" />
                                    <WorkoutItem name="BB Rows" sets="8" />
                                    <WorkoutItem name="BB Upright Rows" sets="8" />
                                    <WorkoutItem name="BB Squats" sets="8" />
                                    <WorkoutItem name="BB Walking Lunges" sets="8pairs" />
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
                            link: '/fitness/strength',
                            text: 'Strength Programs'
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

export default fatloss;
