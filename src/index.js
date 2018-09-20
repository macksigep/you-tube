import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from '../src/components/search_bar';
import VideoList from '../src/components/video_list';

const API_KEY = 'AIzaSyCn_5wTde6aR0z7TTyvxag319_OQFwTQBY'; 

export class App extends Component {
    constructor(props){
        super(props)

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'running'},(data) => { 
            this.setState({ videos: data });
           
        });  
    }

    render(){ 
        console.log(this.state.videos);
        return (
            <div>
                <p>SearchBar</p>
                <SearchBar />
                <VideoList videos={this.state.videos} /> 
             </div>
        ); 
    }
    
}

ReactDOM.render(<App />, document.querySelector('.container'));