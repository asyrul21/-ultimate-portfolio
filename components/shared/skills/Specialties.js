// import specific style here
import specialtiesStyles from './specialties.module.scss';

// import relevant components
import Specialty from './Specialty'

const Specialties = () => {
    return (
        <div className={specialtiesStyles.specialtiesContainer}>
            <Specialty
                title='Machine Learning'
                sub='Supervised, Unsupervised'
                style={specialtiesStyles.ml}
            />
            <Specialty
                title='Chatbots'
                sub='Querying Knowledge Graphs'
                style={specialtiesStyles.robot}
            />
            <Specialty
                title='Natural Language Processing'
                sub='Text Mining Pipeline'
                style={specialtiesStyles.nlp}
            />
            <Specialty
                title='Software Engineering'
                sub='Full-stack Web Development'
                style={specialtiesStyles.se}
            />
        </div>
    )
}

export default Specialties;