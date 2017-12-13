import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';

import './Search.css';

class Search extends React.Component {
  onAutoCompleteChange(event) {

  }

  onAutoCompleteSelect(val) {
    return !!val;
  }

  static getItemValue(item) {
    return item.label;
  }

  static renderAutoCompleteItem(item, isHighlighted) {
    return (
      <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
        {item.label}
      </div>
    );
  }

  render() {
    let value = 'testing';

    return (
      <div className="Search">
        <Autocomplete
          getItemValue={this.getItemValue}
          items={this.props.autoCompleteItems}
          renderItem={this.renderAutoCompleteItem}
          value={this.props.value}
          onChange={this.onAutoCompleteChange}
          onSelect={this.onAutoCompleteSelect}
        />
      </div>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string,
  autoCompleteItems: PropTypes.array
};

Search.propTypes = {
  value: '',
  autoCompleteItems: []
};

export default Search;