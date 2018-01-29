import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="col bordered padding rounded margin-right">
                <h4>Step 1. Search Band</h4>
                <br/>
                <div className=" form-inline">
                    <input type="text" onChange={this.props.onInputChange}
                        className="form-control mr-sm-2"
                        placeholder="Search">
                    </input>
                    <button onClick={this.props.onSearch}
                        className="btn btn-outline-success my-2 my-sm-0">
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;
//crc