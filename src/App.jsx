import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import DataAndMenuSection from './components/DataAndMenuSection'

function App() {
  
  return (
    <>
      <Header/>
      <DataAndMenuSection/>
    </>
  )
}

export default App
