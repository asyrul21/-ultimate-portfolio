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

            {props.data.text2 &&
                <div className={headStyles.text}>
                    {props.data.text2}
                </div>
            }
        </div>
    )
}

export default ContentHead;