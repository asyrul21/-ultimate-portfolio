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
                </ContentContainer>
            </FitnessLayout>
        )
    }
}

export default fatloss;
