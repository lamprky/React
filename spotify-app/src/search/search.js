import React from 'react';
import Actions from './actions/actions.js';
import Artists from '../common/artists.js';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            artists: props.artists,
            sortByAsc: false,
            displayOption: {
                list: true,
                grid3: false,
                grid4: false
            },
        };

        this.onSort = this.onSort.bind(this);
        this.onFiltering = this.onFiltering.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.artists !== this.state.artists) {
            this.setState({ artists: nextProps.artists });
        }
    }

    onSort() {
        let sortedList = this.state.artists.sort(this.compare);

        if (this.state.sortByAsc)
            sortedList = sortedList.reverse();

        this.setState({
            artists: sortedList,
            sortByAsc: !this.state.sortByAsc
        });
    }

    compare(a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }

    onFiltering(event) {
        const textInserted = event.target.value.toLowerCase();
        const filteredResults = this.props.artists.filter((artist) => {
            return artist.name.toLowerCase().includes(textInserted);
        });
        this.setState({
            artists: filteredResults
        });
    }

    render() {
        return (
            <div className="container">
                <Actions
                    onInputChange={this.props.onInputChange}
                    onSearch={this.props.onSearch}
                    onSort={this.onSort}
                    onFiltering={this.onFiltering}
                    sortByAsc={this.state.sortByAsc} />

                <Artists artists={this.state.artists}
                    onSelectedHeart={this.props.onSelectedHeart}
                    displayOption={this.state.displayOption} />
            </div>
        );
    }
}

export default Search;
