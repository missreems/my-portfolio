import React from 'react'

class Tech extends React.Component{
  render() {
    return (
      <section className="projects-container" id="projects">
        <div className="projects-heading">
          <h2>Projects</h2>
          <div></div>
        </div>

        <div className="projects-content">
          <div className="project-card">
            <h3>General Assembly</h3>
            <h3>Software Engineering Immersive Bootcamp</h3>
            <h4>Sep 2019 to Dec 2019</h4>
            <p>This 12-week immersive bootcamp covered many trending programming languages and frameworks like JavaScript, Python, React and Django, as well as the MERN stack and RESTful programming. The course structure covered daily stand-ups, code-along lessons, labs, daily homework, and 4 key projects.</p>
            <div className="project-icons">
              <a href="#"><i className="fab fa-github-square"></i></a>
              <a href="#"><i className="devicon-heroku-plain"></i></a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Tech