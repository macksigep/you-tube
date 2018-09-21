import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from '../src/components/search_bar';

const API_KEY = 'AIzaSyCn_5wTde6aR0z7TTyvxag319_OQFwTQBY';

YTSearch({key: API_KEY, term: 'running'}, function(data) {
    console.log(data);
});

export class  App extends Component {

    render(){ 
        
        return(  
        <div>
            Basic React Framework
        </div>); 
    };
    
}

ReactDOM.render(<App />, document.querySelector('.container'));