import React from 'react';
import ItemVideo from './ItemVideo';

const ListVideo = ({ videos, onVideoSelect }) => {
    const renderList = videos.map(video => {
        // key={video.id.videoid}
        return(
            <ItemVideo
                key={video.etag}
                onVideoSelect={onVideoSelect}
                video={video} 
            />
        );
    });

    return <div 
        className="ui relaxed divided list">
        {renderList}
    </div>
};

export default ListVideo;