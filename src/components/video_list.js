import React from'react' 

const VideoList = (props) =>{ 

     console.log(props);

     const vidoes = props.vidoes;

     defaultProps = {
         vidoes = " "
     }

    return ( 
        <ul className ="col-md-4-list-group">
        {vidoes.length}
        </ul>
    )
};

export default VideoList;