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
                    <li><span className="key">12 : </span>Perform 1 set of 12 repetitions</li>
                    <li><span className="key">4x12 : </span>Perform 4 sets of 12 repetitions</li>
                    <li><span className="key">4x10-12 : </span>Perform 4 sets of 10 to 12 repetitions</li>
                    <li><span className="key">3-4x10-12 : </span>Perform 3 to 4 sets of 10 to 12 repetitions</li>
                    <li><span className="key">5RM : </span>5 Rep Max</li>
                    <li><span className="key">5x5@90% of 5RM : </span>Perform 5 sets of 5 reps using 90% of your 5-rep Max</li>
                    <li><span className="key">2x5@80% of  Monday : </span>Perform 2 sets of 5 reps using 80% of Monday's weight</li>
                    <li><span className="key">1:2x4 of 30secs : </span>Work for 30 seconds and rest for 60 seconds for 4 sets</li>
                    <li><span className="key">1:1x4 of 1min : </span>Work for 1 minute and rest for 1 minute for 4 sets</li>
                    <li><span className="key">2:1x4 of 30secs : </span>Work for 60 seconds and rest for 30 seconds for 4 sets</li>
                </ul>
            </div>
            <style jsx>{`
                .container {
                    width: 100%;
                    border: black solid 2px;
                    border-radius: 5px;
                    padding: 25px;
                    margin-top: 45px;
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