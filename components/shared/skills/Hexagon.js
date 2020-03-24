// import specific style here
import hexagonStyles from './hexagon.module.scss';
import cx from 'classnames';

const Hexagon = (props) => {
    return (
        <div className={cx(hexagonStyles.hexagonContainer, props.style)}>
            <img alt='hexagon'></img>
            <div className={hexagonStyles.hexagon}></div>
        </div>
    )
}

export default Hexagon;

// "/static/images/specialties/ml.png"