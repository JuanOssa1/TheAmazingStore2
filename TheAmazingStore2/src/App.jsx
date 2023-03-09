import { useState } from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import AppLogin from './components/AppLogin/AppLogin'
import AppMainPage from './components/AppMainPage/AppMainPage'
import AppFooter from './components/AppFooter/AppFooter'
import './App.scss'

function App() {
  const [isValid, setValid] = useState(false)

  return (
    <div className="App">
      <section id='HeaderApp'>
        <AppHeader/>
        {!isValid && <AppLogin setValid={setValid}></AppLogin> }
        {isValid && <AppMainPage/>}
        <AppFooter/>
      </section>
    </div>
  )
}

export default App
