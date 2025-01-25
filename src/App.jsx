import { useState } from 'react'

import './App.css'
import Home from './pages/home/Home'
import HowWork from './pages/howWork/HowWork'
import About from './pages/about/About'
import Recipes from './pages/recipes/Recipes'
import Testmonials from './pages/testmonials/Testmonials'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'

function App() {
  const [count, setCount] = useState(0)
        
  return (
    <>
     <main>
      <Home/>
      <HowWork/>
      <About/>
      <Recipes/>
      <Testmonials/>
      <Contact/>
      <Footer/>
     </main>
    </>
  )
}

export default App
