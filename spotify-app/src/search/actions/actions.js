import React from 'react';
import Search from './search.js';
import Filter from './filter.js';
import Sort from './sort.js';

class Actions extends React.Component {
    render() {
        return (
            <div className="container margin-top">
                <div className="row">
                    <Search
                        onInputChange={this.props.onInputChange}
                        onSearch={this.props.onSearch} />

                    <Filter onFiltering={this.props.onFiltering} />

                    <Sort onSort={this.props.onSort}
                        onFiltering={this.props.onFiltering}
                        sortBy={this.props.sortByAsc} />

                    <div className="col bordered padding rounded">
                        <h4>Step 4. Add to Favorites</h4>
                        <br />
                        <div className="glyphicon glyphicon-heart heart bordered rounded red"
                            title="Add to favorites">
                            &hearts;
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Actions;
