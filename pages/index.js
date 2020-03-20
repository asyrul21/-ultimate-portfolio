import react from 'react';
import Link from 'next/link';
import BaseLayout from '../components/layouts/BaseLayout'
import cx from 'classnames'
import TextLoop from "react-text-loop";

//global styles can be found at ../styles/main.scss
//import specific styling module
import indexStyles from './styles/index.module.scss';

// this is the landing page
const phrases = ['Full-Stack Web Development', 'Software Engineering', 'Machine Learning', 'Big Data']

class Index extends react.Component {

    render() {
        return (
            < BaseLayout >
                <div className={cx('hero', indexStyles.IndexHero)}>
                    <div className={cx(indexStyles.textContainer, indexStyles.appear)}>
                        <div>
                            <h4 className={indexStyles.Welcome}>Welcome to My World</h4>
                        </div>
                        <div>
                            <h4 className={indexStyles.Name}>Asyrul Hafetzy Ahmad</h4>
                            <h5 className={indexStyles.Job}>
                                <TextLoop
                                    delay={100}
                                    interval={1500}
                                    mask={true}
                                >
                                    <span>Full-stack Web Development</span>
                                    <span>Software Engineering</span>
                                    <span>Big Data</span>
                                    <span>Artificial Intelligence</span>
                                </TextLoop>
                                {/* Full-stack Web Developer */}
                            </h5>
                        </div>
                    </div>
                </div>
            </ BaseLayout >
        )
    }
}

export default Index;

    //constructor() {
    // calling super constructor
    //super();

    // set state
    // this.state = {
    //     visible: false
    // }

    //binding local methods
    // this.updateTitle = this.updateTitle.bind(this);
    // this.onShow = this.onShow.bind(this)
    //}




    // onShow() {
    //     this.setState({
    //         visible: true
    //     })
    // }



    // react lifecycle methods
    // 1. componentDidMount()
    // 2. componentDidUpdate()
    // 3. componentWillUnmount()
    // 4. getInitialProps - Next specialty

    // local method
    // updateTitle() {
    //     this.setState({
    //         title: 'I am updated Title'
    //     })
    // }