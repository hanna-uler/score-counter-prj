import { useState } from 'react'
import css from "./App.module.css";
import Header from "../Header/Header"
 

export default function App() {
  return (
    <div className={css.container}>
      <Header />
    </div>
    
  )
  
}