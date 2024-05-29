import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Coin from '../src/pages/Coin/Coin'

import Navbar from '../src/component/Navbar/Navbar'

function App() {

  return (
    <>
    <div className="min-h-screen text-[#fff] bg-[#002834] bg-gradient-to-b from-[#0b004e]   to-[#1d152f]  ">
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/coin/:coinId'  element={<Coin/>} />
      </Routes>


    </div>
     
    </>
  )
}

export default App
