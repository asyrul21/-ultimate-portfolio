// import specific style here
import hexagonStyles from './hexagon.module.scss';
import { cx } from 'emotion';

const Hexagon = (props) => {
    return (
        <div className={cx(hexagonStyles.hexagonContainer, props.style)}>
            <img></img>
            {/* <img className={hexagonStyles.ml}></img> */}
            <div className={hexagonStyles.hexagon}></div>
        </div>
    )
}

export default Hexagon;

// "/static/images/specialties/ml.png"