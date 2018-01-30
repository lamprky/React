import React from 'react';
import Artists from '../common/artists.js';
import ResultsDisplay from '../common/resultsDisplay.js';

class Favorite extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayOption: {
                list: true,
                grid3: false,
                grid4: false
            },
        };

        this.onSelectedDisplay = this.onSelectedDisplay.bind(this);
    }

    onSelectedDisplay(option) {
        this.setState({
            displayOption: {
                list: (option == 'list') ? true : false,
                grid3: (option == 'grid3') ? true : false,
                grid4: (option == 'grid4') ? true : false,
            }
        });
    }

    render() {
        return (
            <div className="container">
                <ResultsDisplay
                    displayOption={this.state.displayOption}
                    onSelectedDisplay={this.onSelectedDisplay} />
                <Artists
                    artists={this.props.favorites}
                    onSelectedHeart={this.props.onSelectedHeart}
                    displayOption={this.state.displayOption} />
            </div>
        )
    }
}

export default Favorite;
