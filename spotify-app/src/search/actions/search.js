import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="col bordered padding rounded margin-right">
                <h4>Step 1. Search Band</h4>
                <br />
                <div className="form-group">
                    <input type="text" onChange={this.props.onInputChange}
                        className="form-control"
                        placeholder="Search">
                    </input>
                    <button onClick={this.props.onSearch}
                        className="btn btn-success">
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;