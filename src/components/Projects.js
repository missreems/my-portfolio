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
            <div className="key-info">
              <h3>Animalia</h3>
              <h3>JavaScript | React | SAAS | Django | Python</h3>
              <h4>Solo</h4>
              <h4>Duration: 1 week</h4>
            </div>
            <p>This is a Full Stack app. It used a Python Django API, served my data from a PostgreSQL database and consumed the API through React. The concept of my app was an animal encyclopedia.</p>
            <div className="project-icons">
              <a href="#"><i className="fab fa-github-square"></i></a>
              <a href="#"><i className="devicon-heroku-plain"></i></a>
            </div>
          </div>

          <div className="project-card">
            <div className="key-info">
              <h3>Amazing Movies</h3>
              <h3>JavaScript | React | SAAS | Express</h3>
              <h4>Pair Programming</h4>
              <h4>Duration: 2 days</h4>
            </div>
            <p>This is pair-programming project. We built a React app using an external API. The concept of our app was a movie finder, we used ‘The Movie Database’ API and focussed heavily on the functionality of the filter sidebar.</p>
            <div className="project-icons">
              <a href="#"><i className="fab fa-github-square"></i></a>
              <a href="#"><i className="devicon-heroku-plain"></i></a>
            </div>
          </div>

          <div className="project-card">
            <div className="key-info">
              <h3>Tech Meet</h3>
              <h3>JavaScript | React | SAAS | Express | MongoDB</h3>
              <h4>Group Project</h4>
              <h4>Duration: 1 week</h4>
            </div>
            <p>This is a Full Stack MERN app. The concept of our RESTful app was a tech-specific events website, which was initially based on the ‘Meetups’ website with a full-screen map feature integrated via the ‘Mapbox’ API.</p>
            <div className="project-icons">
              <a href="#"><i className="fab fa-github-square"></i></a>
              <a href="#"><i className="devicon-heroku-plain"></i></a>
            </div>
          </div>

          <div className="project-card">
            <div className="key-info">
              <h3>Jelly Invaders</h3>
              <h3>Vanilla JavaScript | HTML5 | CSS3</h3>
              <h4>Solo Project</h4>
              <h4>Duration: 1 week</h4>
            </div>
            <p>This is a grid game built with vanilla JavaScript. The concept of the game was to recreate my own version of the classic ‘Space Invaders’ game. This was my first project since I began my programming journey.</p>
            <div className="project-icons">
              <a href="#"><i className="fab fa-github-square"></i></a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Tech