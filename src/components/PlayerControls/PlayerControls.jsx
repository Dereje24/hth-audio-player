import React from 'react';
import PropTypes from 'prop-types'
import Button from '../Button/Button';

import './PlayerControls.css'

const skipBackwardsIcon = (
  <svg className="icon">
    <use xlinkHref="/src/images/open-iconic.min.svg#media-skip-backward" className="playerIcon playerIcon--skipBackwardIcon"></use>
  </svg>
);

const playIcon = (
  <svg className="icon">
    <use xlinkHref="/src/images/open-iconic.min.svg#media-play" className="playerIcon playerIcon--playIcon"></use>
  </svg>
);

const pauseIcon = (
  <svg className="icon">
    <use xlinkHref="/src/images/open-iconic.min.svg#media-pause" className="playerIcon playerIcon--pauseIcon"></use>
  </svg>
);

const skipForwardIcon = (
  <svg className="icon">
    <use xlinkHref="/src/images/open-iconic.min.svg#media-skip-forward" className="playerIcon playerIcon--skipForwardIcon"></use>
  </svg>
);

class PlayerControls extends React.Component {
  render() {
    return (
      <div className="PlayerControls">
        <Button className="PlayerControls--button" onClick={this.props.onSkipBackwardsClick}>{skipBackwardsIcon}</Button>
        <Button className="PlayerControls--button" onClick={this.props.onPlayClick}>{playIcon}</Button>
        <Button className="PlayerControls--button" onClick={this.props.onPauseClick}>{pauseIcon}</Button>
        <Button className="PlayerControls--button" onClick={this.props.onSkipForwardClick}>{skipForwardIcon}</Button>
      </div>
    );
  };
}

PlayerControls.propTypes = {
  onSkipBackwardsClick: PropTypes.func,
  onPlayClick: PropTypes.func,
  onPauseClick: PropTypes.func,
  onSkipForwardClick: PropTypes.func
};

export default PlayerControls;