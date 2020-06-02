import react from 'react'

// import layouts
import ContentContainer from '../components/layouts/ContentContainer'
import TravelLayout from '../components/layouts/TravelLayout'

//import components
import ContentHead from '../components/shared/ContentHead'
import BoxCategories from '../components/shared/BoxCategories'

// import data
import contentHeadData from '../public/static/data/contentHeads.json'

//React Reveal Animation
import Fade from 'react-reveal/Fade';

// import data
import travelData from '../public/static/data/travel.json'

class Travel extends react.Component {
    render() {
        let data = travelData.travel.slugs;
        return (
            <TravelLayout>
                <ContentContainer>
                    <Fade delay={200}>
                        <ContentHead data={contentHeadData.travel} />
                    </Fade>
                    <div className={"seperator"}></div>
                    <Fade delay={200}>
                        <BoxCategories page="travel" data={data} />
                    </Fade>
                </ContentContainer>
                <style jsx>{`
                    .seperator {
                        border-top: solid rgba(88,88,88,0.5) 1px;
                        width: 100%;
                        margin-top: 80px;
                        margin-bottom: 30px;
                    }
                `}</style>
            </TravelLayout>
        )
    }
}

export default Travel;