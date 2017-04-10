'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class PlayersMenu extends React.Component {
  render() {
    return (
      <nav className="players-menu">
        {this.props.players.map(menuPlayer => {
          return <Link key={menuPlayer.id} to={`/player/${menuPlayer.id}`} activeClassName="active">
            {menuPlayer.name}
          </Link>;
        })}
      </nav>
    );
  }
}
