import React from 'react';


class SortFilter extends React.Component {
    
    render() {
        const sortType = (this.props.sortBy == true) ? 'Desc' : 'Asc';
        return (
            <div className="col bordered padding margin-right rounded">
                <h4>Step 2. Filter or Sort Results</h4>
                <br />
                <div className=" form-inline">
                    <input type="text" 
                    class="form-control mr-sm-2" 
                    placeholder="Filter" 
                    onChange={this.props.onFiltering} />

                    <button className="btn btn-primary"
                        onClick={this.props.onSort}>Sort {sortType}
                    </button>
                </div>
            </div>
        )
    }
}

export default SortFilter;
