import React, { Component } from 'react';
import ArtistsList from './artistsList.js';

class Favorite extends Component {
    render() {
        return (
            <div className="container">
                <ArtistsList artists={this.props.favorites} onSelectedHeart={this.props.onSelectedHeart} />
            </div>
        )
    }
}

export default Favorite;
