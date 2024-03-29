import React, { Component } from 'react'
import lindyPic from './assets/lindy-bio.png'
import { CSSTransition } from 'react-transition-group'

class About extends Component {
  render() {
    return (
      <>
        <div className="about-wrapper">
          <img src={lindyPic} alt="Image of author" className="author-image" />

          <div className="author-bio">
            <p>
              M. J. Lindemann is the author of an upcoming epic fantasy trilogy.
              He lives with his husband and two dogs in Minnesota. In addition
              to writing, he works as a public health nurse, helping to connect
              people to home services.
            </p>

            <p>
              {' '}
              When he's not spending every moment of his free time writing, he
              plays video games, watches an unholy amount of T.V., plays D&D,
              and reads (of course). His favorite genres are science fiction and
              fantasy, but he'll dive into anything that's a good story.
            </p>

            <p>
              {' '}
              What you'll find in his writing: Found family. Rich worlds.
              Diverse casts of characters. Heartwarming moments. Tragedy and
              hope.
            </p>

            <p>
              {' '}
              What you won't find: Sexual assault of any kind. Racism. Sexism.
              Homophobia or transphobia.
            </p>
          </div>
        </div>

        <div id="foglayer_01" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_02" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_03" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
      </>
    )
  }
}

export default About
