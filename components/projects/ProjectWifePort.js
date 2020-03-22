import react from 'react'

//import layout
import ContentFragment from '../layouts/ContentFragment'
import cx from 'classnames'

const ProjectWifePort = (props) => {
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
                    <div className={cx("rowPhotoPortrait", "res1")}></div>
                    <div className={cx("rowPhotoPortrait", "res2")}></div>
                    <div className={cx("rowPhotoLandscape", "res3")}></div>
                </div>
            </ContentFragment>

            <style jsx>{`
                .intro1 {
                    //flex: 0.18;
                    background-image: url('/static/images/projects/wifePort/image1.png');
                }

                .intro2 {
                    //flex: 0.80;
                    background-image: url('/static/images/projects/wifePort/image3.png');
                }

                .main1 {
                    background-image: url('/static/images/projects/wifePort/image2.png');
                }

                .main2 {
                    background-image: url('/static/images/projects/wifePort/image4.png');
                }

                .tech1 {
                    background-image: url('/static/images/projects/wifePort/htmlcss.png');
                }

                .tech2 {
                    background-image: url('/static/images/projects/wifePort/tech.png');
                }

                .res1 {
                    background-image: url('/static/images/projects/wifePort/image7.png');
                }

                .res2 {
                    background-image: url('/static/images/projects/wifePort/image6.png');
                }

                .res3 {
                    background-image: url('/static/images/projects/wifePort/image8.png');
                }

            `}</style>
        </react.Fragment >
    )
}

export default ProjectWifePort;