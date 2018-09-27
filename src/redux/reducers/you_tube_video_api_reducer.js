import {
    VIDEOS_NOT_REQUESTED,
    VIDEOS_SUCCESS, 
    VIDEOS_REQUESTED, 
    VIDEOS_ERROR
} from '../actions/action_types';

import YTSearch from 'youtube-api-search';



const getVideos = ()=> {
    
    let response=[];
  return  YTSearch({
        key: 'AIzaSyCn_5wTde6aR0z7TTyvxag319_OQFwTQBY', 
        term: 'running',
     }, (videos) => {
         console.log('VIDEOS', videos);
         return videos; 
     }); 
    //  console.log('RESPONSE', response);
    //  return response;
}


const initialState = {youTubeVideoResponse: [], status: status.VIDEOS_NOT_REQUESTED };

 

export default function(state = initialState, action= VIDEOS_SUCCESS){
    console.log(getVideos());
    switch(action){
    case VIDEOS_NOT_REQUESTED:
        return initialState;
    case VIDEOS_REQUESTED:
        return {...initialState, status: status.VIDEOS_REQUESTED};
    case VIDEOS_SUCCESS:
        return {...initialState, 
                youTubeVideoResponse: getVideos(), 
                status: VIDEOS_SUCCESS };
    case VIDEOS_ERROR:
            return initialState;
    default:
            return state;
    }
}