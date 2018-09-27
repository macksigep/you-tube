import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import VideoReducer from '../redux/reducers/you_tube_video_api_reducer';

const reducer = combineReducers({
    videos: VideoReducer
});

export default reducer;