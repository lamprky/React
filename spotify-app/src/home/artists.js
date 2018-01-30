import React from 'react';
import Artist from './artist';


class Artists extends React.Component {
    constructor() {
        super();
        this.displayArtists = this.displayArtists.bind(this);
    }

    displayArtists() {
        return this.props.artistsList.map((artist, index) => {
            return <Artist artistDetail={artist}
                key={artist.id}
                onRemoveArtist={this.props.onRemoveArtist}
                onClickArtist={this.props.onClickArtist}
            />
        });
    }

    render() {
        return (
            <div className="col-md-8">
                <h3>
                    Artists <span className="badge">{this.props.artistsList.length}</span>
                </h3>
                <table className="table table-striped table-bordered table-hover ">
                    <thead>
                        <tr>
                            <th>Name (Year)</th>
                            <th>Genre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayArtists()}
                    </tbody>
                </table>
            </div>)
    }
}

export default Artists;