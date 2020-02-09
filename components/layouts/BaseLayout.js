import react from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'



//functional component, instead of class
//because simpler

const BaseLayout = (props) => {
    return (
        <react.Fragment>
            <Header />
            {props.children}
            <Footer />
        </react.Fragment>
    )
}

export default BaseLayout;