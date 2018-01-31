import React from 'react';

const ArtistGrid = (props) => {
    const {
      id,
        img,
        name,
        genre,
        year,
        selected
    } = props.artist;
    
    return (
        <div className={`padding-right margin-top  ${props.columns == 3 ? 'col-4' : 'col-3'}`}>
            <div className="row bordered rounded height-330 padding">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 padding-0">
                    <img src={img} alt="Avatar" className="img-responsive" width="100%" height="200px" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h4>{name}</h4>
                    <p>{genre} - {year}</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className={`glyphicon glyphicon-heart heart bordered rounded ${selected ? 'red' : ''}`}
                        onClick={() => props.onSelectedHeart(id)} title="Add to favorites">
                        &hearts;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistGrid;
