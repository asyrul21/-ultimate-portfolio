import react from 'react'
import ContentLayout from './ContentLayout'
import cx from 'classnames'

//React Reveal Animation
import Fade from 'react-reveal/Fade';

const FitnessLayout = (props) => {
    return (
        <react.Fragment>
            <ContentLayout>
                <div className={cx('hero', 'fitnessHero')}></div>

                {props.children}
            </ContentLayout>
            <style jsx>{`
                .fitnessHero {
                    background-image: url('/static/images/hero/fitness.png');
                    //height: 600px;
                }
            `}</style>
        </react.Fragment>
    )
}

export default FitnessLayout;