import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="col bordered padding rounded margin-right margin-top">
                <h4>Step 1. Search Band</h4>
                <br />
                <div className="form-inline">
                    <input type="text" onChange={this.props.onInputChange}
                        className="form-control col-md-8"
                        placeholder="Search">
                    </input>
                    <button onClick={this.props.onSearch}
                        className="btn btn-success col-md-4">
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;