import React from 'react'

import Nav from './Nav'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <Nav />
        <div className="contact-icons">
          <a href="https://github.com/missreems" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i></a>
          <a href="https://www.linkedin.com/in/reema--patel/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:reemapatel17@outlook.com"><i className="fas fa-envelope-square"></i></a>
        </div>
      </header>
    )
  }
}

export default Header