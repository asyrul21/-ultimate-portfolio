import react from 'react'

//import layout
import ContentFragment from '../layouts/ContentFragment'
import cx from 'classnames'

const ProjectRecipeBook = (props) => {
    const project = props.data
    return (
        <react.Fragment>
            <ContentFragment title={project.title}
                time={project.time} text={project.intro}>

            </ContentFragment>
            <style jsx>{`
                .intro1 {
                    flex: 0.18;
                    background-image: url('/static/images/projects/rpi/intro1.png');
                }

                .intro2 {
                    flex: 0.80;
                    background-image: url('/static/images/projects/rpi/intro2.png');
                }

                .main1 {
                    flex: 0.56;
                    background-image: url('/static/images/projects/rpi/main1.png');
                }

                .main2 {
                    flex: 0.20;
                    background-image: url('/static/images/projects/rpi/main2.png');
                }

            `}</style>
        </react.Fragment >
    )
}

export default ProjectRecipeBook;