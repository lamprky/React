import React from 'react';

class Artist extends React.Component {

    render() {
        const artist = this.props.artistDetail;
        return (
            <tr>
                <td onClick={() => this.props.onClickArtist(artist)}>
                    {artist.name} ({artist.year})
                </td>
                <td onClick={() => this.props.onClickArtist(artist)}>
                    {artist.genre}
                </td>
                <td>
                    <button type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => this.props.onRemoveArtist(artist)}>Remove
                </button>
                </td>
            </tr>)
    }
}

export default Artist;