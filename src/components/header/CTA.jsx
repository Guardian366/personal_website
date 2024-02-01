import React from 'react'
// import CV from '../../assets/Molife_Chaplain_CV.pdf'
import Resume from '../../assets/Molife_Chaplain_Resume.pdf'

const CTA = () => {

  return (
    
    <div className="cta">

        {/* <a href={CV} download className='btn'>Download CV</a> */}
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA
