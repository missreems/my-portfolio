import React from 'react'

class Home extends React.Component{
  render() {
    return (
      <div className="home-container">
        <div className="home-headings">
          <h1>Reema Patel</h1>
          <div></div>
          <h2>Front-End Developer</h2>
          <div></div>
        </div>
        <div className="home-text">
          <p>Bringing creative designs to life</p>
          <a href="#tech">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Home