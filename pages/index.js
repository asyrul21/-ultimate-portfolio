import react from 'react';
import Link from 'next/link';
import BaseLayout from '../components/layouts/BaseLayout'
import cx from 'classnames'
import TextLoop from "react-text-loop";
import Head from 'next/head'

//global styles can be found at ../styles/main.scss
//import specific styling module
import indexStyles from './styles/index.module.scss';

// import layouts
import ContentLayout from '../components/layouts/ContentLayout'
import ContentContainer from '../components/layouts/ContentContainer'

// this is the landing page
const phrases = ['Full-Stack Web Development', 'Software Engineering', 'Machine Learning', 'Big Data']

class Index extends react.Component {

    render() {
        return (
            <ContentLayout>
                <Head>
                    <title>Asyrul Ahmad</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                        key="viewport"
                    />
                </Head>
                <section>
                    <div className={indexStyles.landing}
                    >
                        <div className={cx('fallback', indexStyles.Herofallback)}>
                            <div className={cx('hero', indexStyles.IndexHero)} />
                        </div>
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
                                </h5 >
                            </div >
                        </div >
                    </div>

                </section>
            </ContentLayout>
        )
    }
}

export default Index;

{/* <div className={cx('hero', indexStyles.IndexHero)}></div>
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
//         </h5 >
//     </div >
// </div > * /}