import React from 'react'

import Nav from './Nav'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Nav />
        <div className="contact-icons">
          <a href="#"><i className="fab fa-github-square"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fas fa-envelope-square"></i></a>
        </div>
      </header>
    )
  }
}

export default Header