import React from 'react';
import ArtistList from './artistList.js';
import ArtistGrid from './artistGrid.js';

class Artists extends React.Component {

    displayArtists() {
        const dispOption = this.props.displayOption;

        return this.props.artists.map((artist, index) => {          
            return (
                dispOption.list 
                ?
                <ArtistList artist={artist}
                    key={artist.id}
                    onSelectedHeart={this.props.onSelectedHeart}
                />
                :
                <ArtistGrid artist={artist}
                    key={artist.id}
                    onSelectedHeart={this.props.onSelectedHeart}
                    columns={(dispOption.grid3) ? 3 : 4}
                />
            )
        });
    }

    render() {
        const dispOption = this.props.displayOption;
        return (
            <div className="col margin-top">
                {
                    this.props.artists.length
                        ?
                        <div>
                            <h3>
                                Artists <span className="badge">{this.props.artists.length}</span>
                            </h3>
                            <div className={`${dispOption.list ? '' : 'row'}`}>
                                {this.displayArtists()}
                            </div>
                        </div>
                        :
                        <div className="alert alert-danger" role="alert">No results yet.</div>
                }
            </div>);
    }
}

export default Artists;