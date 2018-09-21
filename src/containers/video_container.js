import React, {Component} from'react'; 
import PropTypes from 'prop-types';

import YTSearch from 'youtube-api-search'; 
import VideoDetail from '../components/video_detail';
import VideoList from '../components/video_list'; 

import SearchBar from '../components/search_bar';

const API_KEY = 'AIzaSyCn_5wTde6aR0z7TTyvxag319_OQFwTQBY'; 

export class VideoContainer extends Component{

    constructor(props){
        super(props)

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'running'},(data) => { 
            this.setState({ videos: data }); 
        });  
    } 

    static propTypes = {
        searchTerm: PropTypes.string
    } 

    render(){ 
    return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.videos} />
            <VideoList videos={this.state.videos} />
        </div>
    );
    } 
}; 

export default VideoContainer; 