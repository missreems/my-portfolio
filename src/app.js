import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.scss'

import Header from './components/common/Header'
import Home from './components/Home'
import About from './components/About'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/common/Footer'

class App extends React.Component{
  render() {
    return (
        <>
          <Header />
          <main>
            <Home />
            <About />
            <Tech />
            <Projects />
            <Experience />
          </main>
          <Footer />
        </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)