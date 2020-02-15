import react from 'react'
import { useSpring, animated } from 'react-spring'
import cx from 'classnames'
import VisibilitySensor from 'react-visibility-sensor'
import Fade from 'react-reveal/Fade';


const ContentContainer = (props) => {
    return (
        <div className='contentContainer'>
            {props.children}
        </div>
    )
}

export default ContentContainer;


{/* <VisibilitySensor>
    {({ isVisible }) =>
        <div className='contentContainer'>
            {props.children}
        </div>
    }
</VisibilitySensor > */}

// {this.state.visible &&
//     this.props.children
// }

{/* <VisibilitySensor
partialVisibility
offset={{ top: 100, bottom: 100 }}
onChange={(isVisible) => {
    this.setState({ visible: isVisible })
    // console.log('Element is now %s', this.state.visible);
}}
> */}

{/* <style jsx>{`
                        .contentTransition {
                            opacity: ${this.state.visible ? 1 : 0};
                            transition: opacity 0.5s linear;
                        }
                    `}</style> */}


                    // const springProps = useSpring(
                    //     {
                    //         config: { duration: 350 },
                    //         opacity: 1,
                    //         transform: 'translateY(0px)',
                    //         from: {
                    //             opacity: 0,
                    //             transform: 'translateY(20px)'
                    //         }
                    //     }
                    // )