import react from 'react'
import cx from 'classnames'

// import specific style here
import timelineStyles from './styles/timeline.module.scss';

const Timeline = (props) => {
    return (
        // <div className={cx('contentContainer')}>
        <div className={timelineStyles.timelineContainer}>
            {/* {console.log(props.data)} */}
            {props.data.map((item, idx) => {
                return (
                    <div key={idx} className={timelineStyles.timelineItem}>
                        <div className={timelineStyles.ball}></div>
                        <div className={timelineStyles.title}>
                            {item.title}{' '}<span className={timelineStyles.grade}>{item.grade}</span>
                        </div>
                        <div className={timelineStyles.title}>
                            {item.sub}
                        </div>
                        {item.title &&
                            <div className={timelineStyles.time}>
                                {"("}{item.time}{")"}
                            </div>
                        }
                        <div className={timelineStyles.text}>
                            {item.text}
                        </div>
                        {(item.title && idx != (props.data.length - 1)) &&
                            <div align='left' className={timelineStyles.separator}></div>
                        }
                    </div>
                )
            })}
        </div>
        //</div> 
    )
}

export default Timeline;