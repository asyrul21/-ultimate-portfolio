import react from 'react';
import Link from 'next/Link';
import BaseLayout from '../components/layouts/BaseLayout'

// this is the landing page

class Index extends react.Component {

    constructor() {
        // calling super constructor
        super();

        // set state
        this.state = {
            title: 'I am index page'
        }

        //binding local methods
        this.updateTitle = this.updateTitle.bind(this);
    }

    // react lifecycle methods
    // 1. componentDidMount()
    // 2. componentDidUpdate()
    // 3. componentWillUnmount()
    // 4. getInitialProps - Next specialty

    // local method
    updateTitle() {
        this.setState({
            title: 'I am updated Title'
        })
    }


    render() {
        return (
            < BaseLayout >
                <p>Hello Next.js</p>
                <p>This will be landing page</p>

                <h2>{this.state.title}</h2>
                <button onClick={this.updateTitle}> Change Title </button>
            </ BaseLayout >
        )
    }
}

export default Index;