import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import VideoContainer from './containers/video_container';

export class App extends Component {
    constructor(props){
        super(props)
    } 

    render(){ 
       
        return (
            <div> 
                <VideoContainer /> 
             </div>
        ); 
    }
    
}

ReactDOM.render(<App />, document.querySelector('.container'));