import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                <div className="row bordered padding rounded margin-right margin-top">
                    <div className="col-12">
                        <h5>Step 1.</h5>
                        <h4>Search Band</h4>
                    </div>
                    <div className="col-12 padding-0">
                        <div className="form-inline">
                            <input type="text" onChange={this.props.onInputChange}
                                className="form-control col-6 col-sm-6 col-md-6 col-lg-8"
                                placeholder="Search">
                            </input>
                            <button onClick={this.props.onSearch}
                                className="btn btn-success col-6 col-sm-6 col-md-6 col-lg-4">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;