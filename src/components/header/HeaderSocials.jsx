import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitterX} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/molife-chaplain/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/Guardian366" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://twitter.com/guard1anPrime" target="_blank" rel='noreferrer'><BsTwitterX/></a>
    </div>
  )
}

export default HeaderSocials