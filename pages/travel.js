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
        return (
            <TravelLayout>
                <ContentContainer>
                    <Fade delay={200}>
                        <ContentHead data={contentHeadData.travel} />
                    </Fade>
                    <Fade delay={200}>
                        <BoxCategories data={travelData} />
                    </Fade>
                </ContentContainer>
            </TravelLayout>
        )
    }
}

export default Travel;