import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.scss'

import Header from './components/common/Header'
import Home from './components/Home'
import Tech from './components/Tech'
import Projects from './components/Projects'

class App extends React.Component{
  render() {
    return (
        <>
          <Header />
          <main>
            <Home />
            <Tech />
            <Projects />
          </main>
        </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)