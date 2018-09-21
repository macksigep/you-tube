import React, {Component} from'react'; 
import PropTypes from 'prop-types';

  
import VideoListItem from './video_list_item'; 
import VideoDetail from '../components/video_detail';   

const VideoList = (props) => { 
   
    const videoListItems = props.videos.map(video =>{
        return <VideoListItem
        onVideoSelect={props.onVideoSelect} 
        key={video.etag} 
        video={video} />
    }); 

    return(
        <div>
            {videoListItems}
        </div>);

}; 

export default VideoList; 






















// export class VideoList extends Component{

//     constructor(props){
//         super(props)

//         this.state = { videos: [] };

//         YTSearch({key: API_KEY, term: this.props.searchTerm},(data) => { 
//             this.setState({ videos: data }); 
//         });  
//     } 

//     static propTypes = {
//         searchTerm: PropTypes.string
//     }

//     videoItems( videos ){ 
//        return videos.map( video =>{ 
//             return <VideoListItem key={video.etag} video={video} />
//         });
//     };

//     render(){ 
//     return (
//         <div>  
//         <VideoDetail video={this.state.videos} />
//         <ul className ="col-md-4-list-group">
//         {this.videoItems(this.state.videos)}
//         </ul>
//         </div>
//     );
//     } 
// }; 

// export default VideoList; 