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

                        {/* foods */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Mains"
                                    itemsPerRow={3}
                                    theme="blue"
                                >
                                    <WorkoutItem name="White Rice (200g)" sets="300kcal" />
                                    <WorkoutItem name="Brown Rice (200g)" sets="222kcal" />
                                    <WorkoutItem name="Nasi Lemak (1 Plate)" sets="400kcal" />
                                    <WorkoutItem name="Fried Bihun (1 Plate)" sets="300kcal" />
                                    <WorkoutItem name="Fried Rice (200g)" sets="330kcal" />
                                    <WorkoutItem name="Hainanese Chicken Rice (200g)" sets="345kcal" />
                                    <WorkoutItem name="Fried Kuey Teow (200g)" sets="304kcal" />
                                    <WorkoutItem name="Oats (30g)" sets="100kcal" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Bread-Based"
                                    itemsPerRow={3}
                                    theme="green"
                                >
                                    <WorkoutItem name="White Bread (each)" sets="75kcal" />
                                    <WorkoutItem name="Whole Meal Bread (each)" sets="72kcal" />
                                    <WorkoutItem name="Roti Canai (each)" sets="300kcal" />
                                    <WorkoutItem name="Roti Telur (each)" sets="415kcal" />
                                    <WorkoutItem name="Tosai (each)" sets="196kcal" />
                                    <WorkoutItem name="Chapatti (each)" sets="60kcal" />
                                    <WorkoutItem name="Mexican Bun (each)" sets="460kcal" />
                                    <WorkoutItem name="Double Cheeseburger (each)" sets="300kcal" />
                                    <WorkoutItem name="(Fast Food) Fries (100g)" sets="312kcal" />
                                    <WorkoutItem name="(Home prepared) Fries (100g)" sets="164kcal" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Beverages"
                                    itemsPerRow={3}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Teh Tarik (1 serving)" sets="100kcal" />
                                    <WorkoutItem name="Milo (1 serving)" sets="120kcal" />
                                    <WorkoutItem name="Americano (16oz)" sets="15kcal" />
                                    <WorkoutItem name="Latte (16oz)" sets="220kcal" />
                                    <WorkoutItem name="Cappucino (16oz)" sets="100kcal" />
                                    <WorkoutItem name="Hot Chocolate (1 serving)" sets="130kcal" />
                                    <WorkoutItem name="Tea (1 serving)" sets="5kcal" />
                                    <WorkoutItem name="Green Tea (1 serving)" sets="3kcal" />
                                    <WorkoutItem name="Bobba Tea (1 serving)" sets="150-250kcal" />
                                    <WorkoutItem name="Fresh Milk, Whole (1 serving)" sets="148kcal" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <WorkoutContainer
                                    title="Protein-Based"
                                    itemsPerRow={3}
                                    theme="blue"
                                >
                                    <WorkoutItem name="Crunchy Fried Chicken (100g)" sets="250kcal" />
                                    <WorkoutItem name="Fried Chicken Drumstick (each)" sets="210kcal" />
                                    <WorkoutItem name="Chicken Breast Fried (100g)" sets="190kcal" />
                                    <WorkoutItem name="Fried Salmon (100g)" sets="208kcal" />
                                    <WorkoutItem name="Egg (each)" sets="70kcal" />
                                    <WorkoutItem name="Tofu (100g)" sets="80kcal" />
                                    <WorkoutItem name="Fried Tempe (100g)" sets="190kcal" />
                                    <WorkoutItem name="Prawns (100g)" sets="115kcal" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Canned-Foods"
                                    itemsPerRow={3}
                                    theme="green"
                                >
                                    <WorkoutItem name="Tuna in Water (150g/1 can)" sets="150kcal" />
                                    <WorkoutItem name="Tuna in Oil (150g/1 can)" sets="273kcal" />
                                    <WorkoutItem name="Sardines (230g/1 can) " sets="320kcal" />
                                    <WorkoutItem name="Mackarels (230g/1 can)" sets="432kcal" />
                                    <WorkoutItem name="Baked Beans (230g/1 can)" sets="212kcal" />
                                </WorkoutContainer>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <WorkoutContainer
                                    title="Deserts"
                                    itemsPerRow={3}
                                    theme="purple"
                                >
                                    <WorkoutItem name="Cheesecake (1 slice)" sets="257kcal" />
                                    <WorkoutItem name="Chocolate Brownie (1 slice)" sets="112kcal" />
                                    <WorkoutItem name="Choc Chip Cookies (each/16g)" sets="78kcal" />
                                    <WorkoutItem name="Krispy Kreme Original Glazed (each)" sets="190kcal" />
                                    <WorkoutItem name="Krispy Kreme Chocolate Glazed (each)" sets="240kcal" />
                                    <WorkoutItem name="Vanilla Ice Cream (1 scoop)" sets="137kcal" />
                                    <WorkoutItem name="Chocolate Ice Cream (1 scoop)" sets="143kcal" />
                                    <WorkoutItem name="Chocolate Ice Cream (1 scoop)" sets="143kcal" />
                                    <WorkoutItem name="Milk Choc Bar (3 Blocks)" sets="234kcal" />
                                </WorkoutContainer>
                            </Fade>
                        </div>
                    </ContentFragment>

                    {/* Macro */}
                    <ContentFragment
                        title={macroData.title} text={macroData.text}
                        link={macroData.link} linkText="Read More"
                    >

                        {/* Photos */}
                        <div className="row">
                            <Fade bottom distance='20px'>
                                <div className={cx("rowPhotoLandscape", "food1")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoPortrait", "food2")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <div className={cx("rowPhotoPortrait", "food3")}></div>
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
                                <div className={cx("rowPhotoPortrait", "avoid1")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoPortrait", "avoid2")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <div className={cx("rowPhotoLandscape", "avoid3")}></div>
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
                                <div className={cx("rowPhotoPortrait", "avoid1")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={200}>
                                <div className={cx("rowPhotoPortrait", "avoid2")}></div>
                            </Fade>
                            <Fade bottom distance='20px' delay={400}>
                                <div className={cx("rowPhotoLandscape", "avoid3")}></div>
                            </Fade>
                        </div>
                    </ContentFragment>

                    {/* Closure */}
                    <ContentFragment title="Closure" text={data.closure}>
                        {/* no photos */}
                    </ContentFragment>

                    <SuggestPages moreOn="Fitness" links={[
                        {
                            link: '/fitness/iifym',
                            text: 'The IIFYM Diet'
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
                    background-image: url('/static/images/fitness/diet/general/food1.jpg');
                }

                .food2 {
                    background-image: url('/static/images/fitness/diet/general/food2.jpg');
                }

                .food3 {
                    background-image: url('/static/images/fitness/diet/general/food3.jpg');
                }
                .avoid1 {
                    background-image: url('/static/images/fitness/diet/general/avoid2.jpg');
                }

                .avoid2 {
                    background-image: url('/static/images/fitness/diet/general/avoid1.jpg');
                }

                .avoid3 {
                    background-image: url('/static/images/fitness/diet/general/avoid3.jpg');
                }

            `}</style>
            </FitnessLayout>
        )
    }
}

export default Iifym