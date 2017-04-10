'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/2007–09_ICC_World_Cricket_League_logo.svg.png"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
          </p>

          <p>
            Do you want to know more about Node.js and Universal JavaScript? <strong>Checkout <a href="https://nodejsdesignpatterns.com">Node.js Design Patterns</a></strong>.
          </p>

          <p>
            Built with <strong>❤</strong>︎ and <strong>code</strong> by <a href="#" target="_blank">Kiran</a>.
            Contribute on <a href="#">GitHub</a> 
          </p>
        </footer>
      </div>
    );
  }
}
