import react from 'react'
import BaseLayout from './BaseLayout'
import BackToTop from '../shared/BackToTop'

// jquery
import $ from 'jquery';

//React Reveal Animation
import Fade from 'react-reveal/Fade';

class ContentLayout extends react.Component {
    constructor() {
        super();
        this.state = {
            documentHeight: 0,
            viewportHeight: 0
        }
        this.onClickToTop = this.onClickToTop.bind(this);
    }

    componentDidMount() {
        this.setState({
            documentHeight: window.document.body.offsetHeight,
            viewportHeight: document.documentElement.clientHeight
        })
    }

    componentDidUpdate() {
        if (this.state.documentHeight !== window.document.body.offsetHeight) {
            this.setState({
                documentHeight: window.document.body.offsetHeight
            })
        }
    }

    onClickToTop(event) {
        event.preventDefault();
        // console.log('Clicked!');
        $("html, body").animate({ scrollTop: 0 }, 1000);
    }

    render() {
        const padding = 800;
        // console.log('Doc height: ', this.state.documentHeight);
        // console.log('Viewport height: ', this.state.viewportHeight);
        // console.log(`Viewport height + ${padding}: `, this.state.viewportHeight * 2 + padding);

        return (
            <BaseLayout>
                {this.props.children}

                {this.state.documentHeight > this.state.viewportHeight * 2 + padding &&
                    <Fade delay={200}>
                        <BackToTop onClick={this.onClickToTop}></BackToTop>
                    </Fade>
                }
            </BaseLayout>
        )
    }
}

export default ContentLayout;