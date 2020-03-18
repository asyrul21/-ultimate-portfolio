import react from 'react';
import Link from 'next/Link';
import cx from 'classnames'

// import layouts
import ContentLayout from '../components/layouts/ContentLayout'
import ContentContainer from '../components/layouts/ContentContainer'

//import components
import ContentHead from '../components/shared/ContentHead'
import Timeline from '../components/shared/Timeline'
import SkillGraphics from '../components/shared/SkillGraphics'

//import data
import workData from '../public/static/data/work.json'
import educationData from '../public/static/data/education.json'
import contentHeadData from '../public/static/data/contentHeads.json'

//React Reveal Animation
import Fade from 'react-reveal/Fade';


//global styles can be found at ../styles/main.scss
//import specific styling module
import aboutStyles from './styles/about.module.scss';

class About extends react.Component {

    render() {
        // console.log(contentHeadData.about_top)
        return (
            <ContentLayout>
                <section>
                    <div className={cx('hero', aboutStyles.aboutHero)}></div>

                    <ContentContainer>
                        <Fade delay={200}>
                            <ContentHead data={contentHeadData.about_top} />
                        </Fade>
                    </ContentContainer>
                </section>

                <section>
                    <div className={cx('hero', aboutStyles.skillHero)}></div>
                    <ContentContainer>
                        <Fade delay={200}>
                            <ContentHead data={contentHeadData.about_skill} />
                        </Fade>
                        <SkillGraphics />
                    </ContentContainer>
                </section>

                <section>
                    <div className={cx('hero', aboutStyles.workHero)}></div>
                    <ContentContainer>
                        <Fade delay={200}>
                            <ContentHead data={contentHeadData.about_work} />
                        </Fade>
                        <Fade delay={300}>
                            <Timeline data={workData.work} />
                        </Fade>
                    </ContentContainer>
                </section>

                <section>
                    <div className={cx('hero', aboutStyles.educationHero)}></div>
                    <ContentContainer>
                        <Fade delay={200}>
                            <ContentHead data={contentHeadData.about_education} />
                        </Fade>
                        <Fade delay={300}>
                            <Timeline data={educationData.education} />
                        </Fade>
                    </ContentContainer>
                </section>
            </ContentLayout>
        )
    }
}
export default About;


{/* <div className={aboutStyles.yasminBoxContainer}>
    <div className={aboutStyles.box}></div>
    <div className={aboutStyles.box}></div>
    <div className={aboutStyles.box}></div>
</div> */}