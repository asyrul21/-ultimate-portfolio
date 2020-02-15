// import specific style here
import react from 'react'
import skillbarStyles from './skillbar.module.scss';
import cx from 'classnames'
import VisibilitySensor from 'react-visibility-sensor'

class SkillBar extends React.Component {
    // state = {
    //     visible: this.props.visible
    // }

    render() {
        return (

            <div className={skillbarStyles.skillBarContainer} >
                <div className={skillbarStyles.skill}><span>{this.props.skill}</span></div>
                <div className={skillbarStyles.statsContainer}>
                    <div className={cx(skillbarStyles.stats, 'statsAnimate')}></div>
                </div>
                <span className='span2'>{this.props.stats}%</span>
                <style jsx>{`
                    .statsAnimate {
                        animation: expand 1s ease-in;
                        animation-fill-mode: forwards;
                        // animation-delay: 0.5s;
                    }
    
                    // .span1{
                    //     animation: fadeIn 0.5s ease-in forwards;
                    //     animation-delay: 1s;
                    // }
    
                    .span2 {
                        animation: fadeIn 0.5s ease-in forwards;
                        animation-delay: 1s
                    }
    
                    @keyframes expand {
                        from {
                          width: 1%;
                        }
                        to {
                          width: ${this.props.visible ? this.props.stats : 5}%;
                        }
                    }
    
                    @keyframes fadeIn {
                        to {
                          opacity: 1;
                        }
                    }
                `}</style>
            </div>

        )
    }
}

export default SkillBar;

// style={{ width: `${props.stats}%` }}
               // width: ${props.stats}%;