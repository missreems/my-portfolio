import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.scss'

import Header from './components/common/Header'
import Home from './components/Home'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'

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
        </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)