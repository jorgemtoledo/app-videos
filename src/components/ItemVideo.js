import React from 'react';
import './ItemVideo.css';

const ItemVideo = ({ video, onVideoSelect }) => {
    return(
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <div className="ui card">
                <div className="image">
                    <img
                        alt={video.snippet.title}
                        className="ui image"
                        src={video.snippet.thumbnails.medium.url} 
                    />
                </div>
                <div className="content">
                    <div className="description">
                        {video.snippet.title}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ItemVideo;