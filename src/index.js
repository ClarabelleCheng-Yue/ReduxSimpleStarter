import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar  from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyDpJDwrp0opJW0B3r_m13UCQPymR_XUEH4';

// create new component and produce HTML
// const is es6, for variable that won't change later
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],  
      selectedVideo: null
    }

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

// put created HTML into page/DOM
ReactDOM.render(<App />, document.querySelector('.container'));