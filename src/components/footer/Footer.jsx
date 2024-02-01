import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitterX} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>MOLIFE</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/molife-chaplain/"><BsLinkedin/></a>
          <a href="https://github.com/Guardian366"><BsGithub/></a>
          <a href="https://twitter.com/guard1anPrime"><BsTwitterX/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Molife Chaplain. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
