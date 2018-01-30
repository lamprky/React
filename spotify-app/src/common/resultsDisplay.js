import React from 'react';
import grid3Black from '../images/grid-3_black.svg';
import grid4Black from '../images/grid-4_black.svg';
import listBlack from '../images/list_black.svg';
import grid3Blue from '../images/grid-3_blue.svg';
import grid4Blue from '../images/grid-4_blue.svg';
import listBlue from '../images/list_blue.svg';

const ResultsDisplay = (props) => {
    const displayOption = props.displayOption;

    return (
        <div className="margin-top">
            <div className="text-align-right">
                <img src={displayOption.list ? listBlue : listBlack}
                    alt="Display results as list"
                    className="bordered padding rounded-left"
                    onClick={() => props.onSelectedDisplay('list')}
                />
                <img src={displayOption.grid3 ? grid3Blue : grid3Black}
                    alt="Display results as 3-columns grid"
                    className="bordered padding"
                    onClick={() => props.onSelectedDisplay('grid3')}
                />
                <img src={displayOption.grid4 ? grid4Blue : grid4Black}
                    alt="Display results as 4-columns grid"
                    className="bordered padding rounded-right"
                    onClick={() => props.onSelectedDisplay('grid4')}
                />
            </div>
        </div>
    )
}

export default ResultsDisplay;
