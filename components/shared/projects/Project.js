import react from 'react'

//import components
import ProProjects from './ProProjects'

// import data
import projectsData from '../../../public/static/data/projects'

const Project = (props) => {
    // console.log(props.id)
    return (
        <div className='projectContainer'>
            {(props.id === 'esri' || props.id === 'myipcs') &&
                <ProProjects data={projectsData.proProjects[`${props.id}`]} />
            }

            <style jsx>{`
                .projectContainer {
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

export default Project