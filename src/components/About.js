import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

class About extends React.Component{
  render() {
    return (
      <section className="about-container" id="about">
        <div className="about-heading">
          <h2>About Me</h2>
          <div></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-summary">
              <h3>Summary</h3>
              <div></div>
            </div>
            <p>I am a Front-End Developer with an interest in building visually appealing applications.</p>
            <p>My previous career in Marketing taught me a lot about the design process and branding. Combining it with my newly acquired knowledge and experience, I&#39;m able to understand more about how designing and development work together when building a website or application.</p>
            <p>I self-studied Python via an online course which led me to take the plunge to become a developer via General Assembly&#39;s Software Engineering Immersive Bootcamp.</p>
            <ReactTypingEffect className="interests"
              text={['Chocolate Glutton', 'Anime Fanatic', 'Snake Enthusiast', 'Candle Decorator', 'Artist']}
              eraseDelay={1500}
              speed={100}
            />
          </div>
          <img src="https://i.imgur.com/FndWkRz.jpg"></img>
          
        </div>
      </section>
    )
  }
}

export default About