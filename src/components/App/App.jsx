// import { useState } from 'react'
import css from "./App.module.css";
import Header from "../Header/Header"
import PlayersQuantityForm from "../PlayersQuantityForm/PlayersQuantityForm"
import PlayersNamesForm from '../PlayersNamesForm/PlayersNamesForm';
import Rules from "../Rules/Rules"
export default function App() {
  // const [isOpen, setIsOpen] = useState(false);
  const handleClickPlay = (chosenBlock) => {
    console.log(chosenBlock)
    return (
      <>
        {chosenBlock === "play" && <p>play</p>}
        {chosenBlock === "rules" && <p>rules</p>}
        {chosenBlock === "play" && <PlayersQuantityForm />}
        {chosenBlock === "rules" && <Rules/>}
      </>
    )
  }
  const handleQtySubmit = (playersQty) => {
    console.log(playersQty);
  }
  const handleNamesSubmit = (namesData) => {
    console.log(namesData);
    console.log(namesData.name1);
    console.log(namesData.name5);

  }

  return (
    <div className={css.container}>
      <Header onClick={handleClickPlay}/>
      <PlayersQuantityForm onQtySubmmit={handleQtySubmit} />
      <PlayersNamesForm onNamesSubmit={handleNamesSubmit}/>
    </div>
    
  )
  
}