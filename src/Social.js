import React from 'react'
import fc_icon from './assets/facebook logo_icon.png'
import ig_icon from './assets/instagram logo_icon.png'
import tw_icon from './assets/twitter logo_icon.png'

function Socials() {
  return (
    <>
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=100090504374481"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fc_icon} alt="Facebook icon" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/mjlindemannwrites/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ig_icon} alt="Instagram icon" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/MJLWrites"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tw_icon} alt="Twitter icon" />
        </a>
      </li>
    </>
  )
}

export default Socials
