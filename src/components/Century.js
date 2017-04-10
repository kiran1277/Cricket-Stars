'use strict';

import React from 'react';

const typeMap = {
  'W': 'Won',
  'L': 'Lost',
  'NR': 'NoResult'
};

export default class Century extends React.Component {
  render() {
    return (
      <li className="century">
        <span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.type]}>{this.props.type}</span>
        <span className="year">{this.props.year}</span>
        <span className="city"> Ground - {this.props.city}</span>
        <span className="against"> with {this.props.against} </span>
        <span className="score"> Scored -{this.props.score} Runs</span>
      </li>
    );
  }
}
