import react from 'react'

//import style
import contentFragmentStyles from './contentFragment.module.scss'

const ContentFragment = (props) => {
    return (
        <react.Fragment>
            {props.title &&
                <div className={contentFragmentStyles.fragmentHeader}>
                    <h5>{props.title}</h5>
                </div>
            }
            {props.subtitle &&
                <div className={contentFragmentStyles.subHeader}>
                    <h5>{props.subtitle}</h5>
                </div>
            }
            {props.time &&
                <div className={contentFragmentStyles.time}>
                    {props.time}
                </div>
            }
            <div className={contentFragmentStyles.text}>
                {props.text}
            </div>
            {props.children &&
                <div className={contentFragmentStyles.photoContainer}>
                    {/* children are just photos */}
                    {props.children}
                </div>
            }
        </react.Fragment >
    )
}

export default ContentFragment;