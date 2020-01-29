import react from 'react'
import Header from '../shared/Header'



//functional component, instead of class
//because simpler

const BaseLayout = (props) => {
    return (
        <react.Fragment>
            <Header />
            {props.children}
        </react.Fragment>
    )
}

export default BaseLayout;