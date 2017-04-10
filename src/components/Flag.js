'use strict';

import React from 'react';

const data = {
  'in': {
    'name': 'India',
    'icon': 'flag-in.png',
  },
  'pk': {
    'name': 'Pakistan',
    'icon': 'flag-pk.png',
  },
  'sl': {
    'name': 'Sri Lanka',
    'icon': 'flag-sl.png',
  },
  'au': {
    'name': 'Australia',
    'icon': 'flag-au.png',
  },
  'nz': {
    'name': 'New Zealand',
    'icon': 'flag-nz.png',
  }
};

export default class Flag extends React.Component {
  render() {
    const name = data[this.props.code].name;
    const icon = data[this.props.code].icon;
    return (
      <span className="flag">
        <img className="icon" title={name} src={`/img/${icon}`}/>
        {this.props.showName && <span className="name"> {name}</span>}
      </span>
    );
  }
}
