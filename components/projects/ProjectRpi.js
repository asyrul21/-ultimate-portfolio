import react from 'react'

//import layout
import ContentFragment from '../layouts/ContentFragment'
import cx from 'classnames'

//React Reveal Animation
import Fade from 'react-reveal/Fade';

const ProjectRpi = (props) => {
    const project = props.data
    return (
        <react.Fragment>
            <ContentFragment title={project.title}
                time={project.time} text={project.intro}>

                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoLandscape", "intro1")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoLandscape", "intro2")}></div>
                    </Fade>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Main Development"
                text={project.main}>

                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoLandscape", "main1")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoLandscape", "main2")}></div>
                    </Fade>
                </div>
            </ContentFragment>

            <ContentFragment subtitle="Technology"
                text={project.technology}>

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

                <div className="row">
                    <Fade bottom distance='20px'>
                        <div className={cx("rowPhotoPortrait", "res1")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={200}>
                        <div className={cx("rowPhotoPortrait", "res2")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={400}>
                        <div className={cx("rowPhotoPortrait", "res3")}></div>
                    </Fade>
                    <Fade bottom distance='20px' delay={600}>
                        <div className={cx("rowPhotoPortrait", "res4")}></div>
                    </Fade>
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
                    background-image: url('/static/images/projects/rpi/rpi.jpg');
                }

                .main1 {
                    //flex: 0.56;
                    background-image: url('/static/images/projects/rpi/project.jpg');
                }

                .main2 {
                    //flex: 0.20;
                    background-image: url('/static/images/projects/rpi/rpi5.jpg');
                }

                .tech1 {
                    background-image: url('/static/images/projects/rpi/tech1.png');
                }

                .tech2 {
                    background-image: url('/static/images/projects/rpi/osc2.jpg');
                }

                .tech3 {
                    background-image: url('/static/images/projects/rpi/osc.jpg');
                }

                .res1 {
                    background-image: url('/static/images/projects/rpi/rpi2.jpg');
                }

                .res2 {
                    background-image: url('/static/images/projects/rpi/rpi1.jpeg');
                }

                .res3 {
                    background-image: url('/static/images/projects/rpi/res1.jpg');
                }

                .res4 {
                    background-image: url('/static/images/projects/rpi/res2.jpg');
                }

            `}</style>
        </react.Fragment >
    )
}

export default ProjectRpi;