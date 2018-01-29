import React from 'react';
import ArtistList from './artistList.js';

class ArtistsList extends React.Component {

    displayArtists() {
        return this.props.artists.map((artist, index) => {
            return <ArtistList artist={artist}
                key={artist.id}
                onSelectedHeart={this.props.onSelectedHeart}
            />
        });
    }

    render() {
        return (
            <div className="col margin-top">
                {
                    this.props.artists.length
                        ?
                        <div>
                            <h3>
                                Artists <span className="badge">{this.props.artists.length}</span>
                            </h3>
                            <div>
                                {this.displayArtists()}
                            </div>
                        </div>
                        :
                        <div className="alert alert-danger" role="alert">No results yet.</div>
                }
            </div>);
    }
}

export default ArtistsList;