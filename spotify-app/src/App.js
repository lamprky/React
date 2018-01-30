import React from 'react';
import './App.css';
import {
  Route,
  BrowserRouter,
  Link,
} from 'react-router-dom';
import Search from './search/search.js';
import Home from './home/home.js';
import Favorite from './favorites/favorite.js';
import logo from './images/logo.svg';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      artists: [],
      favorites: []
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSelectedHeart = this.onSelectedHeart.bind(this);
    //bind
  }

  onSelectedHeart(id) {
    const artistsChanged = this.state.artists.map(artist => {
      if (artist.id === id)
        artist.selected = !artist.selected;
      return artist;
    });

    this.setState({
      artists: artistsChanged,
      favorites: artistsChanged.filter(artist => artist.selected)
    });

  }

  onInputChange(event) {
    this.setState({
      searchText: event.target.value,
      //artists: []
    });
  }

  onSearch() {
    const searchUrl = 'http://localhost:3001/artists?q=' + this.state.searchText

    fetch(searchUrl)
      .then(res => res.json())
      .then(artists => {
        const artistResponse = artists.map(artist => {
          return {
            ...artist,
            selected: false
          }
        });
        this.setState({ artists: artistResponse });
      })
      .catch(error => alert('Error receiving data from DB'));
  }

  render() {
    const favorites = this.state.favorites;
    const favsCount = favorites.length;
    let counter = (favsCount > 0) ? "(" + favsCount + ")" : '';

    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Link to='/' className="navbar-brand">
                <img src={logo} alt="logo" width="30" height="30" /> Home
              </Link>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to='/search' className="nav-link">Search</Link>
                </li>
                <li className="nav-item">
                  <Link to='/favorite' className="nav-link">Favorite {counter}</Link>
                </li>
              </ul>
            </div>
          </nav>
          
          <Route exact path='/' render={() => {
            return <Home />
          }} />
          <Route path='/search' render={() => {
            return <Search
              onInputChange={this.onInputChange}
              onSearch={this.onSearch}
              artists={this.state.artists}
              onSelectedHeart={this.onSelectedHeart} />
          }} />
          <Route path='/favorite' render={() => {
            return <Favorite
              favorites={favorites}
              onSelectedHeart={this.onSelectedHeart}
            />
          }} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
