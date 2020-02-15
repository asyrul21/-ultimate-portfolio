// import specific style here
import skillgraphicStyles from './styles/skillgraphic.module.scss';

// import relevant components
import Specialties from './skills/Specialties'
import SkillBars from './skills/SkillBars'

const SkillGraphics = () => {
    return (
        <div className={skillgraphicStyles.graphicsContainer}>
            <Specialties />
            <SkillBars />
        </div>
    )
}

export default SkillGraphics;