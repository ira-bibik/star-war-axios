import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from './components/Header'
import './App.css'

const App = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <div className='main'>
        <Outlet />
      </div>
    </div>
  );
}

export {App}