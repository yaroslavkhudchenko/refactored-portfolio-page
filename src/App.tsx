import { FunctionComponent, useEffect } from 'react'

import About from './Components/About/About'
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen'
import Header from './Components/Header/Header'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Background from './BackgroundLogic/background'

import './global.module.scss'

const App: FunctionComponent = () => {
  useEffect(() => {
    Background()
  }, [])
  return (
    <div className='App'>
      <Header />
      <WelcomeScreen />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
