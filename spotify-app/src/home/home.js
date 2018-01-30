import React from 'react';
import Artists from './artists';
import Albums from './albums';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            artists: [],
            albums: [],
            displArtist: ''
        };

        this.removeArtist = this.removeArtist.bind(this);
        this.clickArtist = this.clickArtist.bind(this);
    }

    componentDidMount() {
        let firstArtist;
        fetch('http://localhost:3001/artists')
            .then(res => res.json())
            .then(artists => {
                this.setState({
                    artists
                });

                firstArtist = artists[0];
                return fetch('http://localhost:3001/artists/' + firstArtist.id + '/albums');
            })
            .then(res => res.json())
            .then(albums => {
                this.setState({
                    albums
                });

                this.setState({ displArtist: firstArtist })
            })
            .catch(err => alert('error'));
    }

    removeArtist(selectedArtist) {
        this.setState({
            artists: this.state.artists.filter(artist => {
                if (artist.id !== selectedArtist.id)
                    return artist;
            })
        })

        if (this.state.displArtist.id === selectedArtist.id) {
            this.setState({
                albums: []
            });
        }
    }

    clickArtist(selectedArtist) {
        fetch('http://localhost:3001/artists/' + selectedArtist.id + '/albums')
            .then(res => res.json())
            .then(albums => {
                this.setState({
                    albums
                });
            })
            .catch(err => alert('error retrieving albums'));

        this.setState({ displArtist: selectedArtist })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Artists artistsList={this.state.artists}
                        onRemoveArtist={this.removeArtist}
                        onClickArtist={this.clickArtist} />
                    <Albums albumsList={this.state.albums} displArtist={this.state.displArtist} />
                </div>
            </div>
        );
    }
}

export default Home;