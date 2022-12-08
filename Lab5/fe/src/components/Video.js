import React, {useRef, useState} from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

const Video = ({url, channel, description, song, likes, shares, messages}) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return (
    <div className='video'>
      <video
        src={url}
        className="video_player"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      >
      </video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSideBar likes={likes} shares={shares} messages={messages} />
    </div>
  )
}

export default Video
