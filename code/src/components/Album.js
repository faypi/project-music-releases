import React from 'react'
import { Artist } from './Artist'
import { Image } from './Image'


export const Album = (props) => {
    return (
        <div className='album'>
                <div className='image'>{props.album.images.map((data)=>{
                    return <Image images ={data}/>
                })}</div>

                
            <div>Album name: {props.album.name}</div>

            <div className='artists'>{props.album.artists.map((data)=> {
                    return <Artist artist={data}/>
                })}</div>
        </div>
    )
}