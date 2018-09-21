import React from 'react';  

const VideoDetail = ({video}) => {
 

    if(!video){
        return <div>Loading...</div>;
    } 

    const  videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-detail col-mid-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item"  src={url}></iframe>
            </div> 
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};


export default VideoDetail;







// const VideoDetail = ({video}) => { 

//     if(!video){
//         return <div>Loading...</div>
//     }

//         let key;
//         let videoId;
//         let url;
//         let title; 
//         let description;
       

//       return video.map(video => {
//         key = video.etag;
//         videoId = video.id.videoId;
//         url = `https://www.youtube.com/embed/${videoId}`;
//         title = video.snippet.title;
//         description = video.snippet.description; 
//    });

//         return (  
//             <div key={key} className="video-detail col-mid-8">
//                  <div className="embed-responsive embed-responsive-16by9">
//                     <iframe className="embed-responsive-item">{url}</iframe>
//                 </div>
   
//                 <div className="details">
//                     <div>{title}</div>
//                     <div>{description}</div>
//                 </div>
//             </div>
//        ); 
//     }; 
// export default VideoDetail;