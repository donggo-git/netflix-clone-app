import React from 'react'

function Suspense() {
    return (
        <div>
            <video controls width="100%" autoplay="autoplay" muted controls={false}>

                <source src="/Netflix New Logo Animation Intro (Februrary 2019).mp4"
                    type="video/webm" />

                <source src="/public/Netflix New Logo Animation Intro (Februrary 2019).mp4"
                    type="video/mp4" />

                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
    )
}

export default Suspense
