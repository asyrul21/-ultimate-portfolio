import react from 'react'

//import style
import contentFragmentStyles from './contentFragment.module.scss'

const ContentFragment = (props) => {
    return (
        <react.Fragment>
            {props.title &&
                <div className={contentFragmentStyles.fragmentHeader}>
                    {props.title}{' '}{props.time && <span className={contentFragmentStyles.time}>({props.time})</span>}
                </div>
            }
            {props.link &&
                <div className={contentFragmentStyles.linkContainer} >
                    <a className={contentFragmentStyles.link} href={props.link} target="_blank">View</a>
                </div>
            }
            {props.subtitle &&
                <div className={contentFragmentStyles.subHeader}>
                    {props.subtitle}
                </div>
            }
            <div className={contentFragmentStyles.text}>
                <p>{props.text}</p>
            </div>

            {props.type === 'links' &&
                <div className={contentFragmentStyles.linkContainer} >
                    {props.links.map((link, id) => {
                        return (
                            <a key={id} className={contentFragmentStyles.link} href={link} target="_blank">Video{id + 1}{'\t'}</a>
                        )
                    })
                    }
                </div>
            }

            {props.children &&
                <div className={contentFragmentStyles.ItemsContainer}>
                    {/* children are just photos or links */}
                    {props.children}
                </div>
            }
        </react.Fragment >
    )
}

export default ContentFragment;