import React from 'react';
import PropTypes from 'prop-types';

import './Progress.css';

class Progress extends React.Component {
  renderText1() {
    if (!this.props.text1) {
      return null;
    }

    return <div className="Progress--text1">{this.props.text1}</div>;
  }

  renderText2() {
    if (!this.props.text2) {
      return null;
    }

    return <div className="Progress--text2">{this.props.text2}</div>;
  }

  render() {
    const width = 40;

    return (
      <div className="Progress">
        {this.renderText1()}
        <div className="Progress--bar">
          <div className="Progress--bar--meter" style={{ width }}></div>
        </div>
        {this.renderText2()}
      </div>
    );
  }
}

Progress.propTypes = {
  text1: PropTypes.node,
  text2: PropTypes.node,
  length: PropTypes.number,
  currentPosition: PropTypes.number
};

export default Progress;