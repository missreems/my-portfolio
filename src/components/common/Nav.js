import React from 'react'

class Nav extends React.Component {

  render() {
    return (
      <nav>
        <a href="header">Home</a>
        <a href="#about">About</a>
        <a href="#tech">Tech</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </nav>
    )
  }
}

export default Nav