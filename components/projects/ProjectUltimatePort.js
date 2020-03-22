import react from 'react'

//import layout
import ContentFragment from '../layouts/ContentFragment'
import cx from 'classnames'

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
                    <div className={cx("rowPhotoLandscape", "tech1")}></div>
                    <div className={cx("rowPhotoLandscape", "tech2")}></div>
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