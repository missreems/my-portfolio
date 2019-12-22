import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="contact-heading">
          <h2>Contact Me</h2>
          <div></div>
        </div>

        <h3>Please get in touch if you like my portfolio or are interested to know more about me</h3>
        
        <div className="contact-info-container">

          <div className="info-type">
            <div>
              <a href="#"><i className="fas fa-envelope-square"></i></a>
              <p>Email:</p>
            </div>
            <p>reemapatel17@outlook.com</p>
          </div>

          <div className="info-type">
            <div>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <p>LinkedIn:</p>
            </div>
            <p>linkedin.com/in/reema--patel</p>
          </div>

          <div className="info-type">
            <div>
              <a href="#"><i className="fab fa-github-square"></i></a>
              <p>Github:</p>
            </div>
            <p>github.com/missreems</p>
          </div>
          
        </div>
      </footer>
    )
  }
}

export default Footer