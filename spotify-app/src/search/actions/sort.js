import React from 'react';


class Sort extends React.Component {

    render() {
        const sortType = (this.props.sortBy == true) ? 'Desceding' : 'Asceding';
        return (

            <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                <div className="row bordered padding rounded margin-right margin-top">
                    <div className="col-12">
                        <h5>Step 3.</h5>
                        <h4>Sort Results</h4>
                    </div>
                    <div className="col-12 padding-0">
                        <div className="">
                            <button className="btn btn-primary btn-block"
                                onClick={this.props.onSort}>Sort {sortType}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sort;
