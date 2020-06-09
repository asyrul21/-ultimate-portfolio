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
import data from '../../public/static/data/FitnessItems/hypertrophy'
import disc from '../../public/static/data/FitnessItems/disclaimer'

import Fade from 'react-reveal/Fade';


class Hypertrophy extends React.Component {

    render() {
        const headerData = data.header;
        const keyIdeaData = data.keyidea;
        const upperlowerData = data.upperlower;
        const pushpullData = data.pushpull;
        const brosplitData = data.brosplit;
        return (
            <FitnessLayout>
                <ContentContainer breadcrumbs={['Fitness', 'Hypertrophy']} >
                    <Disclaimer text={disc.disclaimer} />
                    {/* Insert Fragments here */}
                    <ContentFragment title={headerData.title} text={headerData.text}>
                        {/* no photos */}
                    </ContentFragment>
                    <ContentFragment subtitle={keyIdeaData.title} text={keyIdeaData.text}>
                        {/* no photos */}
                    </ContentFragment>

                    <WorkoutNotation />
                    {/* The upper lower split */}
                    <ContentFragment
                        title={upperlowerData.title}
                        text={upperlowerData.text}
                        link={upperlowerData.link}
                        linkText="Read More"
                    >

                        {/* Workouts */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Upper"
                                    notes="Rest for 90-120 seconds between each set. TIME YOUR REST. If you decide to do pullups then you can skip the Back Cable Extensions."
                                    itemsPerRow={2}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warm ups (light cardio)" sets="10-15mins" />
                                    <WorkoutItem name="Pullups (optional)" sets="4xmax effort" />
                                    <WorkoutItem name="DB/BB Bench Press" sets="4x6-12" />
                                    <WorkoutItem name="Barbell Rows" sets="4x8-12" />
                                    <WorkoutItem name="Seated DB Shoulder Press" sets="4x10-12" />
                                    <WorkoutItem name="Back Cable Extensions" sets="3x12-15" />
                                    <WorkoutItem name="Inclined Skull Crushers" sets="3x8-12" />
                                    <WorkoutItem name="Seated DB curls" sets="3x8-12" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Lower"
                                    notes="You may want to rest longer (120-180 seconds) on Squats, expecially if you are lifting heavy. For calf press rest for 30 seconds between sets."
                                    itemsPerRow={2}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warm ups (light cardio)" sets="10-15mins" />
                                    <WorkoutItem name="BB Squats" sets="4x6-12" />
                                    <WorkoutItem name="Leg Press" sets="4x8-12" />
                                    <WorkoutItem name="Stiff Legged Deads" sets="4x10-12" />
                                    <WorkoutItem name="Quad Extensions" sets="3x10-12" />
                                    <WorkoutItem name="Hams Extensions" sets="3x10-12" />
                                    <WorkoutItem name="Calf Press" sets="5x10" />
                                    <WorkoutItem name="Crunches SS w/" sets="3x15" />
                                    <WorkoutItem name="Plank" sets="3x60 secs" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                        {/* Workouts */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Upper (alt)"
                                    notes="If you decide to do pullups then you can skip the Close-grip PullDowns."
                                    itemsPerRow={2}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warm ups (light cardio)" sets="10-15mins" />
                                    <WorkoutItem name="Pullups (optional)" sets="4xmax effort" />
                                    <WorkoutItem name="Inclined DB/BB Bench Press" sets="4x6-12" />
                                    <WorkoutItem name="Edge BB Rows" sets="4x8-12" />
                                    <WorkoutItem name="Machine shoulder press" sets="4x10-12" />
                                    <WorkoutItem name="Close-grip PullDowns" sets="3x12-15" />
                                    <WorkoutItem name="Cable Tricep Pushdowns" sets="3x8-12" />
                                    <WorkoutItem name="EZ Bar Curls" sets="3x8-12" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Lower (alt)"
                                    notes="You may want to train with lower intensity (lower weight) on the second leg day of the week. For lunges, left and then right repetitions are counted as 1 (as pairs). If you cannot do front squats, switch it up with Goblet Squats.If you cannot do full leg raises you can try doing knee raises."
                                    itemsPerRow={2}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warm ups (light cardio)" sets="10-15mins" />
                                    <WorkoutItem name="Front Squats" sets="4x10-12" />
                                    <WorkoutItem name="Lunges" sets="3x10-12" />
                                    <WorkoutItem name="Hyperextensions" sets="3x10-12" />
                                    <WorkoutItem name="Quad Extensions" sets="3x10-12" />
                                    <WorkoutItem name="Seated Calf Raises" sets="5x10" />
                                    <WorkoutItem name="Leg/Knee Raises" sets="3x10-15" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                    </ContentFragment>


                    {/* The Push Pull Leg split */}
                    <ContentFragment
                        title={pushpullData.title}
                        text={pushpullData.text}
                        link={pushpullData.link}
                        linkText="Read More"
                    >
                        {/* Workouts */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Push"
                                    notes="For any press movements feel free to switch up between Dumbells and Barbells. Rest 90-120 seconds rest between sets."
                                    itemsPerRow={3}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="Incline Bench Press" sets="4x6-12" />
                                    <WorkoutItem name="Standing Military Press" sets="4x10-12" />
                                    <WorkoutItem name="Lateral Raises SS w/" sets="3x-10-15" />
                                    <WorkoutItem name="Triceps Pushdowns" sets="3x8-15" />
                                    <WorkoutItem name="Pushups" sets="1xTo failure" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Pull"
                                    notes="If you can and decide to do the pullups you can skip the Cable Pulldowns. Do Deadlifts only if you know how to perform it with good form."
                                    itemsPerRow={3}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="Pullups (optional)" sets="4xMax effort" />
                                    <WorkoutItem name="Deadlifts (optional)" sets="1-2x3-5" />
                                    <WorkoutItem name="Barbell Rows" sets="4x8-12" />
                                    <WorkoutItem name="Cable Pulldowns" sets="4x12-15" />
                                    <WorkoutItem name="Cable Back Extensions" sets="3x12-15" />
                                    <WorkoutItem name="Barbell Curls" sets="3x10-15" />
                                    <WorkoutItem name="Hammer Curls" sets="3x10-15" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <WorkoutContainer
                                    title="Legs (Quad Dominant)"
                                    notes="You may want to rest longer (120-180 seconds) on Squats, expecially if you are lifting heavy. For calf press rest for 30 seconds between sets."
                                    itemsPerRow={3}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="BB Squat" sets="4x6-12" />
                                    <WorkoutItem name="Leg Press" sets="4x8-12" />
                                    <WorkoutItem name="Quad Extensions SS w/" sets="3x10-12" />
                                    <WorkoutItem name="Wall Sit" sets="3x30secs" />
                                    <WorkoutItem name="Calf Presses" sets="5x10" />
                                    <WorkoutItem name="Leg/Knee Raises SS w/" sets="3x10-12" />
                                    <WorkoutItem name="Plank" sets="60secs" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Push(alt)"
                                    notes="Contrary to belief, Lorem is not simply random text. It has roots of classical Latin literature from 45 BC, making it over 2000 years old."
                                    itemsPerRow={3}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="Bench Press" sets="4x6-12" />
                                    <WorkoutItem name="Machine Shoulder Press" sets="4x8-12" />
                                    <WorkoutItem name="Lateral Raises SS w/" sets="3x10-12" />
                                    <WorkoutItem name="Rear Delt Raises" sets="3x10-12" />
                                    <WorkoutItem name="Skull Crushers" sets="3x10-12" />
                                    <WorkoutItem name="Tricep pushdowns" sets="3x10-12" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Pull(alt)"
                                    notes="If you can and decide to do the pullups you can skip the Close Grip Pulldowns."
                                    itemsPerRow={3}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="Pullups (optional)" sets="4xMax effort" />
                                    <WorkoutItem name="DB Rows" sets="4x8-12" />
                                    <WorkoutItem name="Edge BB Rows" sets="4x8-12" />
                                    <WorkoutItem name="Close Grip Pulldowns" sets="3x10-12" />
                                    <WorkoutItem name="Cable Back Extensions" sets="3x10-12" />
                                    <WorkoutItem name="Wall DB Curl" sets="3x10-15" />
                                    <WorkoutItem name="Cable DB Curl" sets="3x10-15" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <WorkoutContainer
                                    title="Leg(Hams Dominant)"
                                    notes="For lunges, left and then right repetitions are counted as 1 (as pairs). If you cannot do front squats, switch it up with Goblet Squats."
                                    itemsPerRow={3}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Warm ups" sets="10mins" />
                                    <WorkoutItem name="Front Squat" sets="4x8-12" />
                                    <WorkoutItem name="Stiff Legged Deads" sets="4x8-12" />
                                    <WorkoutItem name="Heel-raised Squats SS w/" sets="3x12-15" />
                                    <WorkoutItem name="Hams Extension" sets="3x12-15" />
                                    <WorkoutItem name="Crunches TS w/" sets="3x10-15" />
                                    <WorkoutItem name="Leg/Knee Raises TS w/" sets="3x10-15" />
                                    <WorkoutItem name="Plank" sets="60secs" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                    </ContentFragment>

                    {/* The Bro split */}
                    <ContentFragment
                        title={brosplitData.title}
                        text={brosplitData.text}
                        link={brosplitData.link}
                        linkText="Read More"
                    >

                        {/* Workouts */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Chest Day"
                                    notes="Rest for 90-120 secs between sets."
                                    itemsPerRow={3}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warmups" sets="10-15mins" />
                                    <WorkoutItem name="Pullups (optional)" sets="4xMax effort" />
                                    <WorkoutItem name="BB/DB Incline Press" sets="4x8-12" />
                                    <WorkoutItem name="BB/DB Bench Press" sets="4x8-12" />
                                    <WorkoutItem name="DB Pullovers" sets="3x8-12" />
                                    <WorkoutItem name="Machine Flys" sets="3x10-15" />
                                    <WorkoutItem name="Tricep Pushdowns" sets="3x8-12" />
                                    <WorkoutItem name="Cable Crunches" sets="3x8-12" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Leg Day"
                                    notes="You may want to rest longer (120-180 seconds) on Squats, expecially if you are lifting heavy. For calf press rest for 30 seconds between sets."
                                    itemsPerRow={3}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warmups" sets="10-15mins" />
                                    <WorkoutItem name="BB Squats" sets="4x6-12" />
                                    <WorkoutItem name="Leg Press" sets="4x8-12" />
                                    <WorkoutItem name="Stiff Legged Deads" sets="4x10-12" />
                                    <WorkoutItem name="Quad Extensions" sets="3x10-12" />
                                    <WorkoutItem name="Hams Extensions" sets="3x10-12" />
                                    <WorkoutItem name="Calf Press" sets="5x10" />
                                    <WorkoutItem name="Knee Raises" sets="3x10-15" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <WorkoutContainer
                                    title="Back Day"
                                    notes="The pullups are replacable with the Lat Pulldowns. Do Deadlifts only if you know how to perform it with good form."
                                    itemsPerRow={3}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Warmups" sets="10-15mins" />
                                    <WorkoutItem name="Pullups Rw/" sets="4xMax effort" />
                                    <WorkoutItem name="Lat Pulldowns" sets="4x8-12" />
                                    <WorkoutItem name="Deadlifts (optional)" sets="" />
                                    <WorkoutItem name="Barbell Rows" sets="4x8-12" />
                                    <WorkoutItem name="Edge BB rows Rw/" sets="3x8-12" />
                                    <WorkoutItem name="Cable Back Extensions" sets="3x8-12" />
                                    <WorkoutItem name="Cable DB Curls" sets="3x10-15" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Shoulders Day"
                                    notes="Rest for 90-120 secs between sets."
                                    itemsPerRow={2}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Warmups" sets="10-15mins" />
                                    <WorkoutItem name="Pullups (optional)" sets="4xMax effort" />
                                    <WorkoutItem name="Standing Military Press" sets="4x8-12" />
                                    <WorkoutItem name="Seated DB Shoulder Press Rw/" sets="4x8-12" />
                                    <WorkoutItem name="Machine Shoulder Press" sets="4x8-12" />
                                    <WorkoutItem name="Lateral Raises SS w/" sets="3x10-12" />
                                    <WorkoutItem name="Rear Delt Raises" sets="3x10-12" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Cardio and Abs"
                                    notes="Rest around 60-120 seconds in between TriSets. For the cardio do light to medium intensity."
                                    itemsPerRow={2}
                                    theme="green"
                                >
                                    <WorkoutItem name="Warmups" sets="10-15mins" />
                                    <WorkoutItem name="Pullups (optional)" sets="4xMax effort" />
                                    <WorkoutItem name="Leg/Knee Raises TS w/" sets="3x6-12" />
                                    <WorkoutItem name="Cable Crunches TS w/" sets="3x8-12" />
                                    <WorkoutItem name="Plank" sets="45-60secs" />
                                    <WorkoutItem name="Run/Bike" sets="30-45mins" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                    </ContentFragment>
                    <ContentFragment title="Closure" text={data.closure}>
                        {/* no photos */}
                    </ContentFragment>

                    <SuggestPages moreOn="Fitness" links={[
                        {
                            link: '/fitness/strength',
                            text: 'Strength Programs'
                        },
                        {
                            link: '/fitness/fatloss',
                            text: 'Fat Loss Programs'
                        },
                        {
                            link: '/fitness/iifym',
                            text: 'The IIFYM Diet'
                        },
                        {
                            link: '/fitness/transformation',
                            text: 'My Transformation'
                        },
                    ]} />
                </ContentContainer>
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
                `}</style>
            </FitnessLayout >
        )
    }
}

export default Hypertrophy


// articles ideas
// why some athletes improve twice as you do:
// 1. genetics
// 2. Drugs
// 3. Training and commitment
// 4. Diet