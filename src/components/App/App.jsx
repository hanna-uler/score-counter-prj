import { useState } from 'react'
import css from "./App.module.css";
import Header from "../Header/Header"
 import PlayersQuantityForm from "../PlayersQuantityForm/PlayersQuantityForm"

export default function App() {
  // const [isOpen, setIsOpen] = useState(false);
  const handleClickPlay = () => {
    return (
      <>
      <PlayersQuantityForm/>
      </>
    )
  }

  return (
    <div className={css.container}>
      <Header onClickPlay={handleClickPlay}/>
    </div>
    
  )
  
}