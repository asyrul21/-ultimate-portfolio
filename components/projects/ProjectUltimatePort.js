import react from 'react'

//import layout
import ContentFragment from '../layouts/ContentFragment'
import cx from 'classnames'

//React Reveal Animation
import Fade from 'react-reveal/Fade';

const ProjectUltimatePort = (props) => {
    const project = props.data
    return (
        <react.Fragment>
            <ContentFragment title={project.title}
                time={project.time} text={project.intro}>
            </ContentFragment>

            <ContentFragment subtitle="Main Development"
                text={project.main}>

            </ContentFragment>

            <ContentFragment subtitle="Technology"
                text={project.technology}>

                {/* Photos */}
                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoLandscape", "tech1")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoLandscape", "tech2")}></div>
                    </Fade>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Results"
                text={project.results}>

            </ContentFragment>
            <style jsx>{`
                .tech1 {
                    //flex: 0.18;
                    background-image: url('/static/images/projects/ultimatePort/react.png');
                }

                .tech2 {
                    //flex: 0.80;
                    background-image: url('/static/images/projects/ultimatePort/next.png');
                }
            `}</style>
        </react.Fragment >
    )
}

export default ProjectUltimatePort;