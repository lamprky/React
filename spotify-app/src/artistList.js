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
        <div className="margin-top">
            <div className="row bordered rounded height-200 padding">
                <div className="col-4">
                    <img src={img} alt="Avatar" className="img-responsive" width="100%" height="100%" />
                </div>
                <div className="col-7">
                    <h3>{name}</h3>
                    <p>{genre} - {year}</p>
                </div>
                <div className="col">
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
