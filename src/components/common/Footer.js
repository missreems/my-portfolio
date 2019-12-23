import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="contact-heading">
          <h2>Contact Me</h2>
          <div></div>
        </div>

        <h3>Please get in touch if you like my portfolio or are interested to know more about me</h3>
        
        <div className="contact-info-container">

          <div className="info-type">
            <div>
              <a href="mailto:reemapatel17@outlook.com"><i className="fas fa-envelope-square"></i></a>
              <p>Email:</p>
            </div>
            <a href="mailto:reemapatel17@outlook.com"><p>reemapatel17@outlook.com</p></a>
          </div>

          <div className="info-type">
            <div>
              <a href="https://www.linkedin.com/in/reema--patel/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
              <p>LinkedIn:</p>
            </div>
            <a href="https://www.linkedin.com/in/reema--patel/" rel="noopener noreferrer" target="_blank"><p>linkedin.com/in/reema--patel</p></a>
          </div>

          <div className="info-type">
            <div>
              <a href="https://github.com/missreems" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i></a>
              <p>Github:</p>
            </div>
            
            <a href="https://github.com/missreems" rel="noopener noreferrer" target="_blank"><p>github.com/missreems</p></a>
          </div>
          
        </div>
      </footer>
    )
  }
}

export default Footer