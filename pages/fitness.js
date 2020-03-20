import react from 'react';
import Link from 'next/Link';
import cx from 'classnames'

// import layouts
import ContentLayout from '../components/layouts/ContentLayout'
import ContentContainer from '../components/layouts/ContentContainer'

//import components
import ContentHead from '../components/shared/ContentHead'
import Tabs from '../components/shared/Tabs'
import InnerTabs from '../components/shared/InnerTabs'
import FitnessItem from '../components/shared/FitnessItem'

//global styles can be found at ../styles/main.scss
//import specific styling module
import fitnessStyles from './styles/fitness.module.scss';

// import data
import contentHeadData from '../public/static/data/contentHeads.json'
import fitnessData from '../public/static/data/fitness.json'

//React Reveal Animation
import Fade from 'react-reveal/Fade';

class Fitness extends react.Component {
    constructor() {
        super()
        this.state = {
            activeTab: '',
            activeItem: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(active) {
        this.setState({
            activeTab: active,
            activeItem: ''
        })
    }

    render() {
        console.log(this.state.activeTab)
        return (
            <ContentLayout>
                <section>
                    <div className={cx('hero', fitnessStyles.fitnessHero)}></div>

                    <ContentContainer>
                        <Fade delay={200}>
                            <ContentHead data={contentHeadData.fitness} />
                        </Fade>

                        <Fade delay={300}>
                            <Tabs onChange={this.handleChange} active={this.state.activeTab}>
                                <span key="Achievements">Achievements</span>
                                <span key="Programs">Programs</span>
                                <span key="Diet">Diet</span>
                            </Tabs>
                        </Fade>

                        {this.state.activeTab === 'Achievements' &&

                            <Fade duration={500}>
                                <InnerTabs onChange={active => { this.setState({ activeItem: active }) }} active={this.state.activeItem} data={fitnessData.slugs.Achievements} />
                            </Fade>
                        }

                        {this.state.activeTab === 'Programs' &&
                            <Fade duration={500}>
                                <InnerTabs onChange={active => { this.setState({ activeItem: active }) }} active={this.state.activeItem} data={fitnessData.slugs.Programs} />
                            </Fade>
                        }

                        {this.state.activeTab === 'Diet' &&
                            <Fade duration={500}>
                                <InnerTabs onChange={active => { this.setState({ activeItem: active }) }} active={this.state.activeItem} data={fitnessData.slugs.Diet} />
                            </Fade>
                        }

                        {this.state.activeItem !== '' &&
                            <Fade duration={500}>
                                <FitnessItem id={this.state.activeItem} />
                            </Fade>
                        }
                    </ContentContainer>
                </section>
            </ContentLayout>
        )
    }
}

export default Fitness;