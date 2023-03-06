import { useState } from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section id='HeaderApp'>
        <AppHeader></AppHeader>
      </section>
    </div>
  )
}

export default App
