import React from 'react';
import Link from 'next/link';
import cx from 'classnames'
import Head from 'next/head'

// import layouts
import ContentLayout from '../components/layouts/ContentLayout'
import ContentContainer from '../components/layouts/ContentContainer'

//import components
import ContentHead from '../components/shared/ContentHead'
import Tabs from '../components/shared/Tabs'
import InnerTabs from '../components/shared/InnerTabs'
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
                <Head>
                    <title>Asyrul Ahmad: My Portfolio</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                        key="viewport"
                    />
                    <meta
                        name="description"
                        content="This is the work page of Asyrul Hafetzy's portfolio website. The page stores information regarding his past projects. There three main categories, academic, professional and personal projects. For now, there are two items in Asyrul Hafetzy's academic project; Using Raspberry Pi 3 to Drive Computerised Numerical Machine (CNC) machine, and A Chatbot to Facilitate Data Preperation Analysis. For Asyrul Hafetzy's professional projects, there are three; the C# ESRI CADU 2, MyIPCS, and Web Crawling with Python. For Asyrul Hafetzy's Personal projects, there are a few; the Wedding Planner system, his Wife's Portfolio, Asyrul's Portfolio, Recipe Book and Kindergarten website."
                        key="description"
                    />
                </Head>
                <section>
                    <Fade>
                        <div className={cx('fallback', projectsStyles.projectsfallback)}>
                            <div className={cx('hero', projectsStyles.projectsHero)}></div>
                        </div>
                    </Fade>
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
                                <InnerTabs onChange={active => { this.setState({ activeProject: active }) }} active={this.state.activeProject} data={projectsData.slugs.Academic} />
                            </Fade>
                        }

                        {this.state.activeTab === 'Professional' &&
                            <Fade duration={500}>
                                <InnerTabs onChange={active => { this.setState({ activeProject: active }) }} active={this.state.activeProject} data={projectsData.slugs.Professional} />
                            </Fade>
                        }

                        {this.state.activeTab === 'Personal' &&
                            <Fade duration={500}>
                                <InnerTabs onChange={active => { this.setState({ activeProject: active }) }} active={this.state.activeProject} data={projectsData.slugs.Personal} />
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