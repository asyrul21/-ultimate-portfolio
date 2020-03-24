import react from 'react';
import Link from 'next/Link';
import cx from 'classnames'

// import layouts
import ContentLayout from '../components/layouts/ContentLayout'
import ContentContainer from '../components/layouts/ContentContainer'

//global styles can be found at ../styles/main.scss
//import specific styling module
// import aboutStyles from './styles/about.module.scss';

class Yasmin extends react.Component {

    render() {
        // console.log(contentHeadData.about_top)
        return (
            <ContentLayout>
                <section>
                    <ContentContainer>
                       HELLOOOOOOOOOOOO
                    </ContentContainer>
                </section>

            </ContentLayout>
        )
    }
}
export default Yasmin;

{/* <Fade delay={200}>
<ContentHead data={contentHeadData.about_education} />
</Fade>
<Fade delay={300}>
<Timeline data={educationData.education} />
</Fade> */}