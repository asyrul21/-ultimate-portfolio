import react from 'react'
import ContentLayout from './ContentLayout'
import cx from 'classnames'

const TravelLayout = (props) => {
    return (
        <react.Fragment>
            <ContentLayout>
                <div className={cx('hero', 'travelHero')}></div>

                {props.children}
            </ContentLayout>
            <style jsx>{`
                .travelHero {
                    background-image: url('/static/images/hero/travel.png');
                    //height: 600px;
                }
            `}</style>
        </react.Fragment>
    )
}

export default TravelLayout;