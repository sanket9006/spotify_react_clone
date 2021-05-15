import React from 'react'
import './SongRow.css'

function SongRow({ track }) {
    return (
        <div className="SongRow">
            <div className="Song_Cover">
                <img src={track?.album.images[2].url} alt={track.album.name}></img>
            </div>

            <div className="Song_info">
                <h4>{track.name}</h4>
                <p>{track.artists.map(artist => (artist.name)).join(", ")}</p>
                <br></br>
            </div>
        </div>
    )
}

export default SongRow
