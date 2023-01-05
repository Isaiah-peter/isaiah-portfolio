import React from 'react'
import NavBar from "./component/nav-bar"
import Intro from "./component/Intro"
import Work from './component/work/Work'
import About from './component/about/About'
import Footer from './component/footer/Footer'

import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Work />
      <About />
      <Footer />
    </div>
  )
}

export default App
