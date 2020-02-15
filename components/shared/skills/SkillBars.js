// import specific style here
import react from 'react'
import skillbarStyles from './skillbar.module.scss';
import VisibilitySensor from 'react-visibility-sensor'

import SkillBar from './SkillBar'

class SkillBars extends React.Component {
    state = {
        visible: false
    }

    render() {
        return (
            <VisibilitySensor
                partialVisibility
                onChange={(isVisible) => {
                    if (!this.state.visible) {
                        this.setState({ visible: isVisible })
                    }
                }}
            >
                <div className='skillbarsContainer' >
                    <SkillBar visible={this.state.visible} skill='Python' stats='80' />
                    <SkillBar visible={this.state.visible} skill='JavaScript' stats='80' />
                    <SkillBar visible={this.state.visible} skill='React' stats='70' />
                    <SkillBar visible={this.state.visible} skill='Express' stats='70' />
                    <SkillBar visible={this.state.visible} skill='Figma' stats='60' />
                    <SkillBar visible={this.state.visible} skill='C#' stats='75' />
                    <SkillBar visible={this.state.visible} skill='C/C++' stats='80' />
                    <SkillBar visible={this.state.visible} skill='Guitar' stats='60' />
                    <SkillBar visible={this.state.visible} skill='Gardening' stats='10' />

                    {/* styling using CSS in JS */}
                    <style jsx> {`
                        .skillbarsContainer {
                            padding: 0;
                            margin: 0;
                            height: 420px;

                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;

                            opacity: ${this.state.visible ? 1 : 0};
                            transition: opacity 1s linear;  
                        }
                `}</style >
                </div >
            </VisibilitySensor>
        )
    }
}

export default SkillBars;