import React from 'react';
import Search from '../Search/Search';
import TrackDetails from '../TrackDetails/TrackDetails';
import Player from '../Player/Player';
import Progress from '../Progress/Progress';
import Footer from '../Footer/Footer';

import './App.css';

class App extends React.Component {
  // get track details here, pass them into the components that need them
  render() {
    return (
      <div className="App">
        <Search />
        <TrackDetails title="Peace Sells, But Who's Buying" artistName="Megadeth" imgSrc="" />
        <Player />
        <Progress length={2} currentPosition={2} />
        <Footer />
      </div>
    );
  }
}

export default App;