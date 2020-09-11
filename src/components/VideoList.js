import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const renderList = props.videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect}
         video = {video}/>
    });
    return <div>{renderList}</div>
   }


export default VideoList;