import React, {Component} from'react'; 
import PropTypes from 'prop-types';
import {connect} from 'react-redux' ;

import _ from 'lodash';

import YTSearch from 'youtube-api-search'; 
import VideoDetail from '../components/video_detail';
import VideoList from '../components/video_list'; 

import SearchBar from '../components/search_bar';

const API_KEY = 'AIzaSyCn_5wTde6aR0z7TTyvxag319_OQFwTQBY'; 

import videos from '../redux/actions/you_tube_video_api_action';

export class VideoContainer extends Component{

    constructor(props){
        super(props)

        this.state = { 
            videos: this.props.allVideos,
            selectedVideo: null 
        }

        this.videoSearch('cooking');
       // videos();
         
    } 

    static propTypes = {
        searchTerm: PropTypes.string
    }

    videoSearch = term => {
        YTSearch({key: API_KEY, term: term},(videos) => { 
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             }); 
        });
    }

    
    render(){
        const throttleVideoSearch = _.debounce((term) => {this.videoSearch(term), 300});

    return ( 
        <div> 
            <SearchBar onSearchTermChange={throttleVideoSearch}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}  
            videos={this.state.videos} />
        </div> 
    );
    } 
}; 

const mapStateToProps = state => {
    return {
        allVideos: state.videos
    }
}

export default connect(mapStateToProps)(VideoContainer)