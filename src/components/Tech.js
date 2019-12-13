import React from 'react'

class Tech extends React.Component{
  render() {
    return (
      <div className="tech-container">
        <div className="tech-heading">
          <h2>Tech</h2>
          <div></div>
        </div>

        <div className="tech-content">
          <div>
            <p className="tech-category">Programming Languages</p>
            <div className="icon">
              <i className="devicon-javascript-plain"></i>
              <p>Javascript</p>
            </div>
            <div className="icon">
              <i className="devicon-python-plain"></i>
              <p>Python</p>
            </div>
          </div>

          <div>
            <p className="tech-category">Source Control &amp; Deployment</p>
            <div className="icon">
              <i className="devicon-github-plain"></i>
              <p>GitHub</p>
            </div>
            <div className="icon">
              <i className="devicon-git-plain"></i>
              <p>Git</p>
            </div>
            <div className="icon">
              <i className="devicon-heroku-plain"></i>
              <p>Heroku</p>
            </div>
          </div>

          <div>
            <p className="tech-category">Frameworks</p>
            <div className="icon">
              <i className="devicon-react-plain"></i>
              <p>React</p>
            </div>
            <div className="icon">
              <i className="devicon-django-plain"></i>
              <p>Django</p>
            </div>
            <div className="icon">
              <i className="devicon-nodejs-plain"></i>
              <p>Node.js</p>
            </div>
            <div className="icon">
              <i className="devicon-express-original"></i>
              <p>Express</p>
            </div>
          </div>
            
          <div>
            <p className="tech-category">Markup &amp; Styling</p>
            <div className="icon">
              <i className="devicon-html5-plain"></i>
              <p>HTML5</p>
            </div>
            <div className="icon">
              <i className="devicon-css3-plain"></i>
              <p>CSS3</p>
            </div>
            <div className="icon">
              <i className="devicon-sass-plain"></i>
              <p>SASS</p>
            </div>
          </div>

          <div>
            <p className="tech-category">Databases</p>
            <div className="icon">
              <i className="devicon-postgresql-plain"></i>
              <p>PostgreSQL</p>
            </div>
            <div className="icon">
              <i className="devicon-mongodb-plain"></i>
              <p>MongoDB</p>
            </div>
          </div>

          <div>
            <p className="tech-category">Package Managers</p>
            <div className="icon">
              <i className="devicon-webpack-plain"></i>
              <p>Webpack</p>
            </div>
            <div className="icon">
              <i className="fab fa-yarn"></i>
              <p>Yarn</p>
            </div>
          </div>

          <div>
            <p className="tech-category">Project Tools</p>
            <div className="icon">
              <i className="devicon-apple-plain"></i>
              <p>Mac</p>
            </div>
            <div className="icon">
              <i className="devicon-visualstudio-plain"></i>
              <p>Visual Studio</p>
            </div>
            <div className="icon">
              <i className="devicon-slack-plain"></i>
              <p>Slack</p>
            </div>
            <div className="icon">
              <i className="devicon-trello-plain"></i>
              <p>Trello</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tech