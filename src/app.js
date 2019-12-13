import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/style.scss'

import Header from './components/common/Header'

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)