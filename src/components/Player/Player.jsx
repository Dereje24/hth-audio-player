import React from 'react';
import Sound from 'react-sound';
import PlayerControls from '../PlayerControls/PlayerControls';

import './Player.css';

class Player extends React.Component {
  onSkipBackwardsClick() {
    console.log('back');
  }

  onPlayClick() {
    console.log('play');
  }

  onPauseClick() {
    console.log('pause');
  }

  onSkipForwardClick() {
    console.log('forward');
  }

  onPlaying() {
    console.log('music is playing');
  }

  onPause() {
    console.log('paused');
  }

  onFinishedPlaying() {
    console.log('music stopped playing');
  }

  render() {
    return (
      <div className="Player">
        <PlayerControls
          onSkipBackwardsClick={this.onSkipBackwardsClick}
          onPlayClick={this.onPlayClick}
          onPauseClick={this.onPauseClick}
          onSkipForwardClick={this.onSkipForwardClick}
        />
        <Sound
           url=''
           playStatus='PAUSED'
           position={0}
           onPlaying={this.onPlaying}
           onPause={this.onPause}
           onFinishedPlaying={this.onFinishedPlaying}
        />
      </div>
    );
  }
}

export default Player;