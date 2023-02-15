import React from 'react'
import './app.css'
import Body from './components/Body-section/Body';
import SideBar from './components/sidebar-section/SideBar';

const App = () => {
  return (
    <div className="container">
      <SideBar />
      <Body />
    </div>
  )
}

export default App