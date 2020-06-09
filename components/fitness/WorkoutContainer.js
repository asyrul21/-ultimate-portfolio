import React from 'react'
import cx from 'classnames'

import workoutContainerStyles from './workoutContainer.module.scss'

const WorkoutContainer = (props) => {
    let color = '#D2E5EF'
    if (props.theme === 'green') {
        color = '#D4EFD2'
    }
    else if (props.theme === 'purple') {
        color = '#D8CCDE'
    }

    return (
        <div className={cx(workoutContainerStyles.container,
            props.itemsPerRow === 2 ? workoutContainerStyles.twoItems : workoutContainerStyles.threeItems)}>
            <>
                <div
                    className={workoutContainerStyles.title} style={{ background: color }}>
                    {props.title}
                </div>
                <div className={workoutContainerStyles.items}>
                    {props.children}
                </div>
            </>
            <>
                {props.notes &&
                    <div className={workoutContainerStyles.notes}>
                        <span style={{ fontWeight: '600' }}>NOTES:</span> {props.notes}
                    </div>
                }
            </>
        </div >
    )
}

export default WorkoutContainer
