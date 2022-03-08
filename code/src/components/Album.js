import React from 'react'

import { Artist } from './Artist'

export const Album = (props) => {
    return (
        <div className='album'>
            <div className='image'>{props.album.images
                .filter((data) => {
                    if (data.width === 300) {
                        //if filter is true then it keeps the image and goes to the .map
                        return true
                    }
                    // all false filters are removed and are not passed to the .map
                    return false
                })
                .map((data) => {
                    console.log(data)
                    return <img src={data.url} />
                })}</div>


            <div>Album name: {props.album.name}</div>

            <div className='artists'>{props.album.artists.map((data) => {
                return <Artist artist={data} />
            })}</div>
        </div>
    )
}