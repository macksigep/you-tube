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

        this.state = { 
            videos: [],
            selectedVideo: null 
        }

        this.videoSearch('running');
         
    } 

    static propTypes = {
        searchTerm: PropTypes.string
    }

    videoSearch = term =>{
        YTSearch({key: API_KEY, term: term},(videos) => { 
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             }); 
        });
    }

    
    render(){  

    return ( 
        <div> 
            <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div> 
    );
    } 
}; 

export default VideoContainer; 