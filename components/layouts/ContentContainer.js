import react from 'react'
import BreadCrumbs from '../shared/BreadCrumbs';


const ContentContainer = (props) => {
    return (
        <div className='contentContainer'>
            {props.breadcrumbs &&
                <BreadCrumbs slugs={props.breadcrumbs}></BreadCrumbs>
            }
            {props.children}
        </div>
    )
}

export default ContentContainer;
