import react from 'react'

const BackToTop = (props) => {
    return (
        <react.Fragment>
            <div onClick={props.onClick} className='backtotopButton'>
                <div className='buttonIcon'></div>
                <div className='buttonText'>Back to Top</div>
            </div>
            <style jsx>{`
                .backtotopButton {
                    color: black;
                    text-align: center;
                    line-height: 45px;

                    background-color: #E5E5E5;
                    height: 40px;
                    width: 140px;

                    margin: 0 auto;
                    margin-top: -30px;
                    margin-bottom: -50px;
                    border-radius: 5px;

                    opacity: 0.9;

                    // box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.42);

                    -webkit-box-shadow: -11px 10px 5px -6px rgba(0,0,0,0.5);
                    -moz-box-shadow: -11px 10px 5px -6px rgba(0,0,0,0.5);
                    box-shadow: -11px 10px 5px -6px rgba(0,0,0,0.5);

                    display:flex;
                    justify-content: center;
                }

                .backtotopButton:hover{
                    opacity: 1;
                    cursor: pointer;
                }

                .buttonIcon {
                    margin:0;
                    height: 100%;
                    width: 40px;

                    background-image: url('/static/images/icons/backtotop.png');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: fit;
                }

                .buttonText{
                    margin:0;
                    height:100%;
                    width: 90px;
                    padding-right:5px;

                    font-size: 14px;
                    font-weight: 500;
                    line-height: 40px;
                }

            `}</style>
        </react.Fragment>
    )
}

export default BackToTop;