import React from 'react'

const WorkoutNotation = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h3 className="header">Notations :</h3>
                <ul>
                    <li><span className="key">BB : </span>Barbell</li>
                    <li><span className="key">DB : </span>Dumbell</li>
                    <li><span className="key">Rw/ : </span>Replacable with the workout next in the list</li>
                    <li><span className="key">SS w/ : </span>Superset with the workout next in the list</li>
                    <li><span className="key">TS w/ : </span>Tri-set with the workout(s) next in the list</li>
                    <li><span className="key">4x12 : </span>Perform 4 sets of 12 repetitions</li>
                    <li><span className="key">4x10-12 : </span>Perform 4 sets of 10 to 12 repetitions</li>
                    <li><span className="key">3-4x10-12 : </span>Perform 3 to 4 sets of 10 to 12 repetitions</li>
                </ul>
            </div>
            <style jsx>{`
                .container {
                    width: 100%;
                    border: black solid 2px;
                    border-radius: 5px;
                    padding: 25px;
                    margin-bottom: 45px;
                    font-weight: 500;
                }

                .header {
                    margin: 0;
                    margin-bottom: 10px;
                    text-decoration: underline;
                }

                .key {
                    font-weight: bold;
                }

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    align-items: flex-start;
                    line-height: 2;
                }
            `}</style>
        </React.Fragment>
    )
}

export default WorkoutNotation