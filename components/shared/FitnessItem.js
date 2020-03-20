import react from 'react'

//import components
import ItemTransform from './../fitnessItems/ItemTransform'

// import data
import fitnessData from '../../public/static/data/fitness.json'

const FitnessItem = (props) => {
    return (
        <div className='fitnessContainer'>
            {/* {(props.id === 'esri' || props.id === 'myipcs') &&
                <ProProjects data={projectsData.proProjects[`${props.id}`]} />
            }
            {(props.id === 'rpi' || props.id === 'chatbot') &&
                <ProjectRpi data={projectsData.academicProjects[`${props.id}`]} />
            } */}

            {/* Each item must have their own page */}
            {(props.id === 'transform' || props.id === 'race') &&
                <ItemTransform data={fitnessData.achievementItems[`${props.id}`]} />
            }

            {(props.id === 'hypertrophy' || props.id === 'fatloss' || props.id === 'strength') &&
                <ItemTransform data={fitnessData.programsItems[`${props.id}`]} />
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