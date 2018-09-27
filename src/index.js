import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import {Provider} from 'react-redux';
import configureStore from '../src/redux/configureStore';
import VideoContainer from './containers/video_container';

export class App extends Component {
    constructor(props){
        super(props)
    } 

    
    render(){ 
        let store = configureStore();
        console.log('STORE', store);
        return (
            <Provider store={store} > 
                <VideoContainer /> 
            </Provider>
        ); 
    } 
}

ReactDOM.render(<App />, document.querySelector('.container'));