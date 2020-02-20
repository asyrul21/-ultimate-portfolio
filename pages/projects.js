import React from 'react';
import Link from 'next/Link';
import cx from 'classnames'

// import layouts
import ContentLayout from '../components/layouts/ContentLayout'
import ContentContainer from '../components/layouts/ContentContainer'

//import components
import ContentHead from '../components/shared/ContentHead'
import Tabs from '../components/shared/Tabs'
import ProjectsTabs from '../components/shared/ProjectsTabs'
import Project from '../components/shared/projects/Project'

//import data
import projectsData from '../public/static/data/projects'

//import data
import contentHeadData from '../public/static/data/contentHeads.json'

//global styles can be found at ../styles/main.scss
//import specific styling module
import projectsStyles from './styles/projects.module.scss';

//React Reveal Animation
import Fade from 'react-reveal/Fade';

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            activeTab: '',
            activeProject: ''
        }

        this.prevActiveTab = ''

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(active) {
        this.prevActiveTab = this.state.activeTab
        this.setState({
            activeTab: active,
            activeProject: ''
        })
    }

    render() {
        // console.log(this.state)
        return (
            <ContentLayout>
                <section>
                    <div className={cx('hero', projectsStyles.projectsHero)}></div>

                    <ContentContainer>
                        <Fade delay={200}>
                            <ContentHead data={contentHeadData.projects} />
                        </Fade>

                        <Fade delay={300}>
                            <Tabs onChange={this.handleChange} active={this.state.activeTab}>
                                <span key="Academic">Academic</span>
                                <span key="Professional">Professional</span>
                                <span key="Personal">Personal</span>
                            </Tabs>
                        </Fade>

                        {this.state.activeTab === 'Academic' &&

                            <Fade duration={500}>
                                <ProjectsTabs onChange={active => { this.setState({ activeProject: active }) }} active={this.state.activeProject} data={projectsData.slugs.Academic} />
                            </Fade>
                        }

                        {this.state.activeTab === 'Professional' &&
                            <Fade duration={500}>
                                <ProjectsTabs onChange={active => { this.setState({ activeProject: active }) }} active={this.state.activeProject} data={projectsData.slugs.Professional} />
                            </Fade>
                        }

                        {this.state.activeTab === 'Personal' &&
                            <Fade duration={500}>
                                <ProjectsTabs onChange={active => { this.setState({ activeProject: active }) }} active={this.state.activeProject} data={projectsData.slugs.Personal} />
                            </Fade>
                        }

                        {this.state.activeProject !== '' &&
                            <Fade duration={500}>
                                <Project id={this.state.activeProject} />
                            </Fade>
                        }
                    </ContentContainer>
                </section>
            </ContentLayout >
        )
    }
}

export default Projects;

// <Fade right=
//     {
//         this.prevActiveTab === 'Professional' ? true :
//             this.prevActiveTab === 'Personal' ? true : false
//     }
//     duration={500}>

// <Fade right=
//     {
//         this.prevActiveTab === 'Personal' ? true : false
//     }
//     left=
//     {
//         this.prevActiveTab === 'Academic' ? true : false
//     }
//     duration={500}>