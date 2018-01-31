import React from 'react';

const ArtistList = (props) => {
    const {
      id,
        img,
        name,
        genre,
        year,
        selected
    } = props.artist;

    return (
        <div className="margin-top margin-right">
            <div className="row bordered rounded height-200 padding">
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 padding-0">
                    <img src={img} alt="Avatar" className="img-responsive" width="100%" height="100%" />
                </div>
                <div className="col-4 col-sm-5 col-md-6 col-lg-6 ">
                    <h4>{name}</h4>
                    <p>{genre} - {year}</p>
                </div>
                <div className="col-2 col-sm-1 col-md-2 col-lg-2">
                    <div className={`glyphicon glyphicon-heart heart bordered rounded ${selected ? 'red' : ''}`}
                        onClick={() => props.onSelectedHeart(id)} title="Add to favorites">
                        &hearts;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistList;
