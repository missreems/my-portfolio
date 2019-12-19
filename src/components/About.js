import React from 'react'

class About extends React.Component{
  render() {
    return (
      <div className="about-container" id="about">
        <div className="about-heading">
          <h2>About</h2>
          <div></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Summary</h3>
            <p>I am a Front-End Developer with an interest in building visually appealing applications.</p>
            <p>My previous career in Marketing taught me a lot about the design process and branding.</p>
            <p>Combining it with my newly acquired knowledge and experience, I&#39;m able to understand more about how designing and development work together when building a website or application.</p>
            <p>I self-studied Python via an online course which led me to take the plunge to become a developer via General Assembly&#39;s Software Engineering Immersive Bootcamp.</p>
          </div>
          <div className="about-media">
            <img src="https://i.imgur.com/4JHtuah.png"></img>
            <p>Interests</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About