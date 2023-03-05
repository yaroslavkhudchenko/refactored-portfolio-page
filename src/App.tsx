import About from './Components/About/About'
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen'
import Header from './Components/Header/Header'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import './global.module.scss'

function App() {
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
