import React from 'react';
import youtube from '../services/apis/youtube';
import NavbarHeader from './NavbarHeader'
import SearchBar from './SearchBar';
import ListVideo from './ListVideo';
import DetailVideo from './DetailVideo';

class App extends React.Component {
    state = ({videos: [], selectedVideo: null });

    componentDidMount() {
        this.onTermSubmit('guanabara')
    }

    onTermSubmit = async term => {
        const KEY = `${process.env.REACT_APP_KEY_YOUTUBE}`;

        const response = await youtube.get('search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                channelId: `${process.env.REACT_APP_CHANNEL_YOUTUBE}`,
                key: KEY
            }
        });
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <>
                <NavbarHeader />
                <div className="ui main text container">
                    <h2 className="ui dividing header">Site</h2>
                    <SearchBar onFormSubmit={ this.onTermSubmit } />
                    {/* {this.state.videos.length} */}
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <DetailVideo video={this.state.selectedVideo} />
                            </div>
                            <div className="five wide column">
                                <ListVideo
                                    onVideoSelect={this.onVideoSelect}
                                    videos={this.state.videos} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;