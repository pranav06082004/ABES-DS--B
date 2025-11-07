import React from 'react'
import Book from './components/book.jsx'
import './App.css'
import Nav from './components/nav.jsx'


function App() {
  return (
    <div>
      <Nav/>
      <div id ="Appjsx">
      <Book Tittle="Math" Price="500"/>
      <Book Tittle="Science" Price="600"/>
      <Book Tittle="English" Price="700"/>
    </div>
    </div>
    
  )
}

export default App