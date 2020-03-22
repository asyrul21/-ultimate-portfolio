import react from 'react'

//import layout
import ContentFragment from '../layouts/ContentFragment'
import cx from 'classnames'

const ProjectWeddingPlanner = (props) => {
    const project = props.data
    return (
        <react.Fragment>
            <ContentFragment title={project.title}
                time={project.time} text={project.intro} link={project.link}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhotoLandscape", "intro1")}></div>
                    <div className={cx("rowPhotoLandscape", "intro2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Main Development"
                text={project.main}>

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhotoLandscape", "main1")}></div>
                    <div className={cx("rowPhotoLandscape", "main2")}></div>
                </div>
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

                {/* Photos */}
                <div className="row">
                    <div className={cx("rowPhotoPortrait", "res3")}></div>
                    <div className={cx("rowPhotoLandscape", "res1")}></div>
                    <div className={cx("rowPhotoPortrait", "res2")}></div>

                </div>
            </ContentFragment>
            <style jsx>{`
                .intro1 {
                    //flex: 0.18;
                    background-image: url('/static/images/projects/wedding/image7.png');
                }

                .intro2 {
                    //flex: 0.80;
                    background-image: url('/static/images/projects/wedding/image1.png');
                }

                .main1 {
                    //flex: 0.56;
                    background-image: url('/static/images/projects/wedding/image2.png');
                }

                .main2 {
                    //flex: 0.20;
                    background-image: url('/static/images/projects/wedding/image8.png');
                }

                .tech1 {
                    //flex: 0.56;
                    background-image: url('/static/images/projects/wedding/nodejs.png');
                }

                .tech2 {
                    //flex: 0.20;
                    background-image: url('/static/images/projects/wedding/mongo.png');
                }

                .res1 {
                    //flex: 0.56;
                    background-image: url('/static/images/projects/wedding/image3.png');
                }

                .res2 {
                    //flex: 0.20;
                    background-image: url('/static/images/projects/wedding/image6.png');
                }

                .res3 {
                    //flex: 0.20;
                    background-image: url('/static/images/projects/wedding/image4.png');
                }

            `}</style>
        </react.Fragment >
    )
}

export default ProjectWeddingPlanner;