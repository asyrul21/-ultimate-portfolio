// import specific style here
import specialtyStyles from './specialty.module.scss';

// import relevant components
import Hexagon from './Hexagon'

const Specialty = (props) => {
    return (
        <div className={specialtyStyles.specialtyContainer}>
            {/* <Hexagon src={props.src} /> */}
            <Hexagon style={props.style} />
            <p className={specialtyStyles.title}>{props.title}</p>
            {/* <p className={specialtyStyles.sub}>{props.sub}</p> */}
        </div>
    )
}

export default Specialty;
