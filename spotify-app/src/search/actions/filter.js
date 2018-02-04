import React from 'react';

class Filter extends React.Component {

    render() {
        const sortType = (this.props.sortBy == true) ? 'Desc' : 'Asc';
        return (


            <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                <div className="row bordered padding rounded margin-right margin-top">
                    <div className="col-12">
                        <h5>Step 2.</h5>
                        <h4>Filter Results</h4>
                    </div>
                    <div className="col-12 padding-0">
                        <div className="">
                            <input type="text"
                                className="form-control"
                                placeholder="Filter"
                                onChange={this.props.onFiltering} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;
