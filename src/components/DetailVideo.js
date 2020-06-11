import React from 'react';

const DetailVideo = ({ video }) => {
    if (!video) {
        return (
            <div>Search</div>
        );
    }

    const videoSrc = `${process.env.REACT_APP_LINK_YOUTUBE}/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="video Player" src={videoSrc}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header"> {video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default DetailVideo;