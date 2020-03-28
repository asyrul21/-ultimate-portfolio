import react from 'react'

//import components
import ItemTransform from './../fitnessItems/ItemTransform'
import ItemRace from './../fitnessItems/ItemRace'
import ItemHypertrophy from './../fitnessItems/ItemHypertrophy'
import ItemFatloss from './../fitnessItems/ItemFatloss'
import ItemStrength from './../fitnessItems/ItemStrength'
import ItemDietGeneral from './../fitnessItems/ItemDietGeneral'
import ItemDietIIFYM from './../fitnessItems/ItemDietIIFYM'

// import data
import fitnessData from '../../public/static/data/fitness.json'

const FitnessItem = (props) => {
    return (
        <div className='fitnessContainer'>
            {/* Each item must have their own page */}
            {(props.id === 'transform') &&
                <ItemTransform data={fitnessData.achievementItems[`${props.id}`]} />
            }

            {(props.id === 'race') &&
                <ItemRace data={fitnessData.achievementItems[`${props.id}`]} />
            }

            {(props.id === 'hypertrophy') &&
                <ItemHypertrophy data={fitnessData.programsItems[`${props.id}`]} />
            }

            {(props.id === 'fatloss') &&
                <ItemFatloss data={fitnessData.programsItems[`${props.id}`]} />
            }

            {(props.id === 'strength') &&
                <ItemStrength data={fitnessData.programsItems[`${props.id}`]} />
            }

            {(props.id === 'general') &&
                <ItemDietGeneral data={fitnessData.dietItems[`${props.id}`]} />
            }

            {(props.id === 'iifym') &&
                <ItemDietIIFYM data={fitnessData.dietItems[`${props.id}`]} />
            }

            <style jsx>{`
                .fitnessContainer {
                    // border: blue 2px solid;
                    width: 100%;
                    margin-top: 80px;
                    margin-bottom: 120px;
                    // min-height: 200px;
                }
            `}</style>
        </div>
    )
}

export default FitnessItem