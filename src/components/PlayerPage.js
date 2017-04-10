'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import PlayersMenu from './PlayersMenu';
import Century from './Century';
import Flag from './Flag';
import players from '../data/players';

export default class PlayerPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const player = players.filter((player) => player.id === id)[0];
    if (!player) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${player.cover})` };
    return (
      <div className="player-full">
        <PlayersMenu players={players}/>
        <div className="player">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${player.image}`}/>
            <h2 className="name">{player.name}</h2>
          </div>
          <section className="description">
            Cricketer from <strong><Flag code={player.country} showName="true"/></strong>,
            born in {player.birth} (Find out more on <a href={player.link} target="_blank">Wikipedia</a>).
          </section>
          <section className="centuries">
            <p>Scorer of <strong>{player.centuries.length}</strong> Centuries:</p>
            <ul>{
              player.centuries.map((century, i) => <Century key={i} {...century}/>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
