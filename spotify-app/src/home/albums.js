import React from 'react';

class Albums extends React.Component {
    constructor() {
        super();
        this.displayAlbums = this.displayAlbums.bind(this);
    }

    displayAlbums() {
        return this.props.albumsList.map((album, index) => {
            return (<tr key={index}>
                <td>{album.name}</td>
            </tr>)
        });
    }

    render() {
        const albums = this.props.albumsList;
        const artistName = this.props.displArtist.name;
        return (
            <div className="col-md-4">
                <h3>
                    {artistName} Albums <span className="badge">{albums.length}</span>
                </h3>
                {
                    albums.length > 0 ?
                        <table className="table table-striped table-bordered table-hover ">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.displayAlbums()}
                            </tbody>
                        </table>
                        :
                        <p className="text-danger">No album available</p>
                }
            </div>)
    }
}

export default Albums;