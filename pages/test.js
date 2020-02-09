// You can live edit this code below the import statements
import React from 'react';
import Fade from 'react-reveal/Fade';

phrases = ['Reveal1', 'Reveal2', 'Reveal3'];

class FadeExample extends React.Component {
    constructor() {
        super()

        this.state = {
            phraseIndex: 0
        }

        this.scrollPhrases = this.scrollPhrases.bind(this)
    }

    componentDidMount() {
        this.scrollPhrases(this.state.phraseIndex)
    }

    scrollPhrases(index) {
        //if (index > this.phrases.length){  
        // index = 0    
        //}

        //this.setState({
        //  phraseIndex: index + 1
        //})
    }

    render() {
        return (
            <div>
                <Fade top>
                    <h1>{phrases[0]}</h1>
                </Fade>
            </div>
        );
    }
}

export default FadeExample;
