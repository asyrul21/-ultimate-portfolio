import react from 'react';
import cx from 'classnames'
import Head from 'next/head'

// import layouts
import ContentLayout from '../components/layouts/ContentLayout'
import ContentContainer from '../components/layouts/ContentContainer'

//import components
import ContentHead from '../components/shared/ContentHead'

//import data
import contentHeadData from '../public/static/data/contentHeads.json'

//React Reveal Animation
import Fade from 'react-reveal/Fade';


//global styles can be found at ../styles/main.scss
//import specific styling module
import testStyles from './styles/test.module.scss';
import aboutStyles from './styles/about.module.scss';

class Test extends react.Component {

    render() {
        return (
            <ContentLayout>
                <div className={cx('fallback', aboutStyles.herofallback)}>
                    <div className={cx('hero', aboutStyles.aboutHero)}></div>
                </div>

                <ContentContainer>
                    <Fade delay={200}>
                        <ContentHead data={contentHeadData.about_top} />
                        <div className={testStyles.box}>
                            Hello!
                        </div>
                    </Fade>
                </ContentContainer>
            </ContentLayout>
        )
    }
}
export default Test;