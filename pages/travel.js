import react from 'react'
import Link from 'next/link'
import cx from 'classnames'

// import layouts
import ContentLayout from '../components/layouts/ContentLayout'
import ContentContainer from '../components/layouts/ContentContainer'

//import components
import ContentHead from '../components/shared/ContentHead'
import BoxCategories from '../components/shared/BoxCategories'

// import data
import contentHeadData from '../public/static/data/contentHeads.json'
import fitnessData from '../public/static/data/fitness.json'

//global styles can be found at ../styles/main.scss
//import specific styling module
// import fitnessStyles from './styles/fitness.module.scss';

//React Reveal Animation
import Fade from 'react-reveal/Fade';

// import data
import travelData from '../public/static/data/travel.json'

class Travel extends react.Component {
    render() {
        return (
            <div>
                <ContentLayout>
                    <section>
                        <div className={cx('hero', 'travelHero')}></div>

                        <ContentContainer>
                            <Fade delay={200}>
                                <ContentHead data={contentHeadData.travel} />
                            </Fade>
                            <Fade delay={200}>
                                <BoxCategories data={travelData} />
                            </Fade>

                        </ContentContainer>
                    </section>
                </ContentLayout>
                <style jsx>{`
                    .travelHero {
                        background-image: url('/static/images/hero/travel.png');
                        height: 600px;
                    }
                `}</style>
            </div>
        )
    }

}

export default Travel;