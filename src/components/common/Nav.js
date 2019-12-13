import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Nav extends React.Component {

  render() {
    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/tech'>Tech</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/experience'>Experience</Link>
        <Link to='/about-me'>About Me</Link>
      </nav>
    )
  }
}

export default withRouter(Nav)