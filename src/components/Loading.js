import React from 'react'
import loadingGif from '../gif/loading.gif'
import './Loading.css'

function Loading() {
    return (
        <div className="loading">
            <img src={loadingGif} alt="loading" />
        </div>
    )
}

export default Loading
