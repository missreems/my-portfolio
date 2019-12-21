import React from 'react'

class Experience extends React.Component{
  render() {
    return (
      <section className="experience-container" id="experience">
        <div className="experience-heading">
          <h2>Experience</h2>
          <div></div>
        </div>

        <div className="experience-content">
          <div className="experience-card">
            <h3>General Assembly</h3>
            <h3>Software Engineering Immersive Bootcamp</h3>
            <h4>Sep 2019 to Dec 2019</h4>
            <p>This 12-week immersive bootcamp covered many trending programming languages and frameworks like JavaScript, Python, React and Django, as well as the MERN stack and RESTful programming. The course structure covered daily stand-ups, code-along lessons, labs, daily homework, and 4 key projects.</p>
          </div>

          <div className="experience-card">
            <h3>Break In Work</h3>
            {/* <h3>Data Entry Clerk</h3> */}
            <h4>Sep 2018 to Mar 2019</h4>
            <p>Researched and checked out my options for my career change.</p>
          </div>
        
          <div className="experience-card">
            <h3>QVC</h3>
            <h3>Data Entry Clerk</h3>
            <h4>Apr 2019</h4>
            <p>This 2-week temp role involved updating prices on Item Master(product software) for all departments.</p>
          </div>

          <div className="experience-card">
            <h3>Talbot Underwriting</h3>
            <h3>Marketing &#38; Communications Assistant</h3>
            <h4>May 2018 to Sep 2018</h4>
            <p>Assisted with the rebranding of seven group subsidiaries following the AIG acquisition and managed two procurement projects. Produced and edited marketing materials in InDesign and web pages on the group and subsidiary websites via Umbraco(CMS).</p>
          </div>

          <div className="experience-card">
            <h3>Shavata Brow Studio</h3>
            <h3>Data Entry Clerk / Office Assistant</h3>
            <h4>Nov 2017 to Apr 2018</h4>
            <p>Increased the usability of loyalty card data by precisely inputting and organising physical data into an electronic format. Assisted the HR team with data processing, organisation of employee records and ensured starter documents were correctly maintained.</p>
          </div>

          <div className="experience-card">
            <h3>Sonovate</h3>
            <h3>Data Entry Administrator &#38; Marketing Assistant</h3>
            <h4>Sep 2016 to Jun 2017</h4>
            <p>Generated accurate leads for business development by researching, categorising and cross-referencing data via the bespoke CRM system. Maintained the marketing brand collateral audit for the rebranding project. Researched and created multiple weekly articles via WordPress and increased SEO ranking with high-quality relevant content.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Experience