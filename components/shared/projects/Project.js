import react from 'react'

//import components
import ProProjects from './ProProjects'
import ProjectRpi from '../../projects/ProjectRpi'
import ProjectChatbot from '../../projects/ProjectChatbot'
import ProjectWifePort from '../../projects/ProjectWifePort'
import ProjectUltimatePort from '../../projects/ProjectWifePort'
import ProjectWeddingPlanner from '../../projects/ProjectWeddingPlanner'
import ProjectFunFactory from '../../projects/ProjectFunFactory'
import ProjectRecipeBook from '../../projects/ProjectRecipeBook'

// import data
import projectsData from '../../../public/static/data/projects'

const Project = (props) => {
    // console.log(props.id)
    return (
        <div className='projectContainer'>
            {(props.id === 'esri' || props.id === 'myipcs' || props.id === 'webcrawl') &&
                <ProProjects data={projectsData.proProjects[`${props.id}`]} />
            }
            {(props.id === 'rpi') &&
                <ProjectRpi data={projectsData.academicProjects[`${props.id}`]} />
            }
            {(props.id === 'chatbot') &&
                <ProjectChatbot data={projectsData.academicProjects[`${props.id}`]} />
            }
            {(props.id === 'wifePort') &&
                <ProjectWifePort data={projectsData.personalProjects[`${props.id}`]} />
            }
            {(props.id === 'ultimatePort') &&
                <ProjectUltimatePort data={projectsData.personalProjects[`${props.id}`]} />
            }
            {(props.id === 'wedding') &&
                <ProjectWeddingPlanner data={projectsData.personalProjects[`${props.id}`]} />
            }
            {(props.id === 'funfactory') &&
                <ProjectFunFactory data={projectsData.personalProjects[`${props.id}`]} />
            }
            {(props.id === 'recipeBook') &&
                <ProjectRecipeBook data={projectsData.personalProjects[`${props.id}`]} />
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