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

                <div className="row">
                    <div className={cx("rowPhotoLandscape", "intro1")}></div>
                    <div className={cx("rowPhotoLandscape", "intro2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Main Development"
                text={project.main}>

                <div className="row">
                    <div className={cx("rowPhotoLandscape", "main1")}></div>
                    <div className={cx("rowPhotoLandscape", "main2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Technology"
                text={project.technology}>

                <div className="row">
                    <div className={cx("rowPhotoLandscape", "tech1")}></div>
                    <div className={cx("rowPhotoLandscape", "tech2")}></div>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Results"
                text={project.results}>

                <div className="row">
                    <div className={cx("rowPhotoPortrait", "res1")}></div>
                    <div className={cx("rowPhotoPortrait", "res2")}></div>
                    <div className={cx("rowPhotoPortrait", "res3")}></div>
                    <div className={cx("rowPhotoPortrait", "res4")}></div>
                </div>
            </ContentFragment>

            {project.videos &&
                <ContentFragment subtitle="Videos"
                    text="Some videos related to this project can be found here:"
                    type="links" links={project.videos}>
                </ContentFragment>
            }
            <style jsx>{`
                .intro1 {
                    //flex: 0.18;
                    background-image: url('/static/images/projects/rpi/rpilogo.jpg');
                }

                .intro2 {
                    //flex: 0.80;
                    background-image: url('/static/images/projects/rpi/rpi.png');
                }

                .main1 {
                    //flex: 0.56;
                    background-image: url('/static/images/projects/rpi/project.png');
                }

                .main2 {
                    //flex: 0.20;
                    background-image: url('/static/images/projects/rpi/rpi5.png');
                }

                .tech1 {
                    background-image: url('/static/images/projects/rpi/tech1.png');
                }

                .tech2 {
                    background-image: url('/static/images/projects/rpi/osc2.png');
                }

                .tech3 {
                    background-image: url('/static/images/projects/rpi/osc.jpg');
                }

                .res1 {
                    background-image: url('/static/images/projects/rpi/rpi2.png');
                }

                .res2 {
                    background-image: url('/static/images/projects/rpi/rpi1.jpeg');
                }

                .res3 {
                    background-image: url('/static/images/projects/rpi/res1.png');
                }

                .res4 {
                    background-image: url('/static/images/projects/rpi/res2.png');
                }


            `}</style>
        </react.Fragment >
    )
}

export default ProjectRpi;