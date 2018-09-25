import {
    VIDEOS_NOT_REQUESTED,
    VIDEOS_SUCCESS, 
    VIDEOS_REQUESTED, 
    VIDEOS_ERROR
} from '../../redux/actions/action_types';
import YTSearch from 'youtube-api-search'; 
import {API_KEY} from '../../util/constants';  

export default function getYouTubeVideos(term = 'running'){

    console.log('IN ACTION CREATOR', API_KEY);

   // return YTSearch({
    //     key: API_KEY,
    //     term: term,
    // }, (videos) => {
    //     console.log(videos);
    //     return{
    //     type: VIDEOS_SUCCESS, 
    //     payload: videos
    //     } 
    // }); 
    
   let r = 
     YTSearch({
        key: API_KEY, 
        term: term,
     }, (videos) => {
         console.log('VIDEOS', videos);
         return videos;
     });
     
     console.log('R', r);

     if(r){
        console.log('if', r);
         return [];
     }else{
        console.log('ELSE',r); 
     }
     
     


    return function(dispatch){
        dispatch({
            type: VIDEOS_REQUESTED
        });
    request.then(response => {
        dispatch({
            type: VIDEOS_SUCCESS, 
            payload: r
        });
    request.catch(error => {
        dispatch({
            type: VIDEOS_ERROR
        })
    })
    })
    }




};


// YTSearch({key: API_KEY, term: term},(videos) => { 
//     this.setState({ 
//         videos: videos,
//         selectedVideo: videos[0]
//      }); 
// });