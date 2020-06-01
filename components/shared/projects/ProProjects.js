import react from 'react'

//import style
import proprojectStyles from './proprojects.module.scss'

//React Reveal Animation
import Fade from 'react-reveal/Fade';

const ProProjects = (props) => {
    const project = props.data
    let delay = 0
    return (
        <react.Fragment>
            <div className={proprojectStyles.projectHeader}>
                <h5>{project.title}</h5>
            </div>
            <div className={proprojectStyles.time}>
                {project.time}
            </div>

            <div className={proprojectStyles.photosContainer}>
                {project.images.map((image, idx) => {
                    if (idx !== 0)
                        delay += 200
                    return (
                        <Fade bottom distance='20px' delay={delay}>
                            <div key={idx} className={proprojectStyles.image} style={{
                                backgroundImage: 'url(' + image + ')',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                {/* <img src={image} /> */}
                            </div>
                        </Fade>
                    )
                })}
            </div>

            <p>{project.text}</p>

            <div className={proprojectStyles.attributes}>
                <span>Role:</span>
                <p>{project.role}</p>
            </div>

            <div className={proprojectStyles.attributes}>
                <span>Main contribution:</span>
                <p>{project.contribution}</p>
            </div>

            <div className={proprojectStyles.attributes}>
                <span>Technology:</span>
                <div className={proprojectStyles.technologyContainer}>
                    {project.technology.map((tech, idx) => {
                        return (
                            <p key={idx}>{tech}</p>
                        )
                    })}
                </div>

            </div>
            <style jsx>{`
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            `}</style>
        </react.Fragment >
    )
}

export default ProProjects;