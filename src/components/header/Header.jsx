import React from 'react'
import './header.css'
import CTA from './CTA'
// import me from '../../assets/me_in_a_suit.jpeg'
import me2 from '../../assets/me_presenting.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>Molife Chaplain</h1>
          <h5 className="text-light">Software Engineer</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me2} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header
