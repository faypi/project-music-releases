import React from 'react'

// import { Artist } from './Artist'

export const Image = (props) => {
    return (
            <div>
           
            <img src = {props.images.url} />
            </div>
    )
}