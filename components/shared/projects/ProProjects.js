import react from 'react'

//import style
import proprojectStyles from './proprojects.module.scss'

const ProProjects = (props) => {
    // console.log(props.data[0].title)
    const project = props.data
    return (
        <react.Fragment>
            <div className={proprojectStyles.projectHeading}>
                <h5>{project.title}</h5>
                <span>{project.time}</span>
            </div>

            <div className={proprojectStyles.photosContainer}>
                {project.images.map((image, idx) => {
                    return (
                        <div key={idx} className={proprojectStyles.image} style={{
                            backgroundImage: 'url(' + image + ')',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}>
                            {/* <img src={image} /> */}
                        </div>
                    )
                })}
            </div>

            <p className={proprojectStyles.text}>{project.text}</p>

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
                <p>Technologies go here</p>
            </div>
            <style jsx>{`
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            `}</style>
        </react.Fragment>
    )
}

export default ProProjects;