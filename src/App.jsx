import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import CategoryPage from './pages/CategoryPage'


function App() {
  

  return (
    <>
     <BrowserRouter >

      <div className='app'>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:query" element={<CategoryPage />}/>
            </Routes>
          </main>
      </div>
     </BrowserRouter>
    </>
  )
}

export default App
