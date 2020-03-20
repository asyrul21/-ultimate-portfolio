import react from 'react'

//import layout
import ContentFragment from '../layouts/ContentFragment'
import cx from 'classnames'

const ProjectRpi = (props) => {
    const project = props.data
    return (
        <react.Fragment>
            <ContentFragment title={project.title}
                time={project.time} text={project.intro}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhoto", "intro1")}></div>
                    <div className={cx("rowPhoto", "intro2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Main Development"
                text={project.main}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main1")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Technology"
                text={project.technology}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhoto", "main1")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Results"
                text={project.results}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhoto", "main1")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                </div>
                <div className="row">
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main2")}></div>
                    <div className={cx("rowPhoto", "main1")}></div>
                </div>
            </ContentFragment>

            {/* TO DO: make a fragment to store links instead */}
            <ContentFragment subtitle="Videos"
                text="Some videos related to this project can be found here: <a href=''>Video1</a> <a href=''>Video2</a> <a href=''>Video3</a>">
                {/* No Photos */}
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

export default ProjectRpi;