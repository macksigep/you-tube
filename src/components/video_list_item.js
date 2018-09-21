import React from 'react'
//import get from 'lodash/get';

const VideoListItem = ({video}) => {
    
    const imageUrl = video.snippet.thumbnails.default.url;

  // const title = get(video, 'snippet.title', '');
    
     return (
     <li className = "list-group-item">
        <div className="video-list-media">
            <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
        </div>
     </li>
    ); 
};

export default VideoListItem; 
