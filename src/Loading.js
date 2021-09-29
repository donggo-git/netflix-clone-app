import React from 'react'
import "./Loading.css"

function Loading() {
    return (
        <div className="Loading">
            <video controls width="100%" height="100%" autoPlay="autoplay" muted controls="false">


                <source src="Netflix New Logo Animation Intro (February 2019).mp4" />


            </video>
        </div>
    )
}

export default Loading
