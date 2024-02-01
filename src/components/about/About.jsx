import React from 'react'
import './about.css'
import myImage from '../../assets/me_in_a_suit.jpeg'
import myImage3 from '../../assets/tree-stomp.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Who am I?</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage3} alt="Me" />
            </div>
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>
          

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5> Undergrad Degree</h5>
                  <small>BSc. Computer Science <br /><i>Ashesi University</i></small>
              </article>

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5> Masters Degree</h5>
                  <small>MSc. Computer Science <br /><i>Arizona State University</i></small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Focuses</h5>
                  <small>
                    <ul>
                      <li>Software Development Engineering</li>
                      <li>Computing Science Fundamentals</li>
                      <li>Big Data Systems</li>
                      <li>System Assurance and Security</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I am a <b>Software Engineer</b> with professional working experience since Aug. 2021. 
                    I am a well rounded, ever-growing software engineer who retains interest in AI and Data systems. 
                    My strong academic foundation and the ability to adapt and learn new languages makes me a great team player.
                    I am capable of maneuvering difficult and vague project requirements to deliver software that is efficient, functional and maintanable.
                    I work great as an individual and create magic as part of a team. I believe in each team member being good at what they do, but also being 
                    good at teaming up. "Put me in a garden and I'll enhance the ecosystem; put me in a pot and I'll thrive."

                    I love being active. I play rugby, do Taekwondo, and run and workout. I read a lot, maybe too much sometimes (hence the mini-library in my apartment).
                    Since Software Engineering is an adventure, I also love adventure. I'll try eat something at least once (except snails. NO.), and unless gravity increases
                    I will skydive or bungy jump as many times as I can.
            </p>

            <p>
                    <b>Guiding Sign on The Road of Code:-  </b> 
                    "Code as if the next person who will read and use your code is a psychopath and they know where you live." - [Unkown]

            </p>
          </div>
      </div>
    </section>
  )
}

export default About