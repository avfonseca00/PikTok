import React, { useState, useRef } from 'react'
import styles from './styles.module.css'

const VIDEO_SRC = "President_Donald_J_Trump.mp4"


const VideoPlayer = () => {

    const [playing, setPlaying] = useState(false)
    const video = useRef()

    const handlePlay = () => {
        if (playing) {
            video.current.pause()
        } else {
            video.current.play()
        }
        setPlaying(!playing)
    }

    return (
        <div className={styles.player}>
            <video
                src={VIDEO_SRC}
                controls={false}
                ref={video}
            >
            </video>
            <button className={styles.play_btn} onClick={handlePlay}></button>
        </div>
    )
}

export default VideoPlayer