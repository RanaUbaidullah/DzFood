import React from 'react'
import './about.css'
function About() {
  return (
<div className="about__section">
  <div className="about__img">
    <img src="img/about.png" alt='about'/>
  </div>
  <div className="about__content">
    <h3 className="subheading">Know About Us</h3>
    <p className="paragraph">
      Our mission is to elevate the quality of life for the urban consumer with
      unparalleled convenience. Convenience is what makes us tick. It's what
      makes us get out of bed and say, "Let's do this."
    </p>
    <a href="@" className="btn">
      Contact us
    </a>
  </div>
</div>

  )
}

export default About