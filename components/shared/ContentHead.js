import react from 'react'
import cx from 'classnames'

// import specific style here
import headStyles from './styles/contentHead.module.scss';

const ContentHead = (props) => {
    return (
        <div className={headStyles.headContainer}>
            <div className={headStyles.title}>
                <h5>{props.data.title}</h5>
            </div>
            <div className={headStyles.quote}>
                {props.data.quote}
            </div>
            <div className={headStyles.author}>
                {props.data.author}
            </div>
            <div className={headStyles.text}>
                {props.data.text}
            </div>
        </div>
    )
}

export default ContentHead;

// {props.children.map((element, idx) => {
//     // gives tag names
//     console.log(element.type)

//     //gives element value
//     //console.log(element.props.children)
//     return (
//         <div key={idx} className={`headStyles.${element.type}`}>
//             {element.props.children}
//         </div>
//     )
// })}