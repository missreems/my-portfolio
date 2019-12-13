import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/style.scss'

import Header from './components/common/Header'
import Home from './components/Home'
import Tech from './components/Tech'

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Home />
          <Tech />
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)