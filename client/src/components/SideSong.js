import React, {useState, useEffect} from 'react'

function SideSong({data}) {

    const [imgPath, setImgPath] = useState();
    const [artist, setArtist] = useState();

    useEffect(() => {
        setImgPath(data.Album.coverImg);
        setArtist(data.Artist.name);   
    });

    return (
        <div className="side-song-container">
            <div>
                <img width="100px" height="100px" src={imgPath} />
            </div>
            <div>
                <div><h3>{data.title}</h3></div>
                <div><h4> by : {artist}</h4></div>
            </div>
        </div>
    )
}

export default SideSong
