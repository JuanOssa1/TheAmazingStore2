import { useState } from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import AppMainContent from './components/AppMainContent/AppMainContent'
import AppFooter from './components/AppFooter/AppFooter'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section id='HeaderApp'>
        <AppHeader></AppHeader>
        <AppMainContent></AppMainContent>
        <AppFooter></AppFooter>
      </section>
    </div>
  )
}

export default App
