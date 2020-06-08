import React from 'react'

// takes 2 properties: name and sets
const WorkoutItem = (props) => {
    return (
        <React.Fragment>
            <div className="itemContainer">
                <span>
                    {props.name}
                </span>
                <span>
                    {props.sets}
                </span>
            </div>
            <style jsx>{`
                .itemContainer{
                    border-bottom: rgba(196,196,196, 0.3) 1px solid;
                    margin-bottom: 10px;

                    display: flex;
                    justify-content: space-between;

                    padding-bottom: 8px;
                }

            `}</style>
        </React.Fragment >
    )
}

export default WorkoutItem
