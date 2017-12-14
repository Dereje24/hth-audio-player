import React from 'react';
import PropTypes from 'prop-types';

class TrackDetails extends React.Component {
  render() {
    return (
      <div className="TrackDetails">
        <img src={this.props.imgSrc} alt="music art" />
        <h1 className="TrackDetails--title">{this.props.title}</h1>
        <div className="TrackDetails--artistName">{this.props.artistName}</div>
      </div>
    );
  }
}

TrackDetails.propTypes = {
  title: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string
};

export default TrackDetails;