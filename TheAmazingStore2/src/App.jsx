import { useState } from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import AppMainContent from './components/AppMainContent/AppMainContent'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section id='HeaderApp'>
        <AppHeader></AppHeader>
        <AppMainContent></AppMainContent>
      </section>
    </div>
  )
}

export default App
