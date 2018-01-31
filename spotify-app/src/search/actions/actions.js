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

                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="row bordered padding rounded margin-right margin-top">
                            <div className="col-12">
                                <h5>Step 4.</h5>
                                <h4> Add to Favorites</h4>
                            </div>

                            <div className="col-12 padding-0">
                                <em className="btn">Click on icon</em>
                                <div className=" glyphicon glyphicon-heart heart bordered rounded red"
                                    title="Add to favorites">
                                    &hearts;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Actions;
