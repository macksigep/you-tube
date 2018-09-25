import {
    VIDEOS_NOT_REQUESTED,
    VIDEOS_SUCCESS, 
    VIDEOS_REQUESTED, 
    VIDEOS_ERROR
} from '../actions/action_types';

const initialState = {youTubeVideoResponse: [], status: status.VIDEOS_NOT_REQUESTED };

console.log('RESPONSE', action.payload, action.status);

export default function(state = initialState, action){
    switch(action.type){
    case VIDEOS_NOT_REQUESTED:
        return initialState;
    case VIDEOS_REQUESTED:
        return {...initialState, status: status.VIDEOS_REQUESTED};
    case VIDEOS_SUCCESS:
        return {...initialState, 
                youTubeVideoResponse: action.payload, 
                status: status.VIDEOS_SUCCESS };
    case VIDEOS_ERROR:
            return initialState;
    default:
            return state;
    }
}