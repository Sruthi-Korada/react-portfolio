import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Typical from 'react-typical';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media.giphy.com/media/LMcB8XospGZO8UQq87/giphy.gif"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              
          <p>HTML5/CSS | Bootstrap | JavaScript | React Js | NodeJS | Express | SQL |
          Ruby |<br/> Ruby on Rails | PHP | JQuery | Ajax | Sass | Adobe Photoshop | Adobe Illustrator </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>


        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
