import React from 'react'

const Disclaimer = (props) => {
    return (
        <React.Fragment>
            <div className="disclaimer">
                {props.text}
            </div>
            <style jsx>{`
             .disclaimer {
                width:100%;
                border: red 2px solid;
                border-radius: 5px;
                margin-bottom: 45px;
                padding: 25px;

                color: red;
                font-weight: 500;
            }
            
            `}</style>
        </React.Fragment>
    )
}

export default Disclaimer
