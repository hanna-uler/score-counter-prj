// import { useState } from 'react'
import css from "./App.module.css";
import Header from "../Header/Header"
import PlayersQuantityForm from "../PlayersQuantityForm/PlayersQuantityForm"
import PlayersNamesForm from '../PlayersNamesForm/PlayersNamesForm';
import Rules from "../Rules/Rules"
// import LoginFormTraining from "../LoginFormTraining/LoginFormTraining"

export default function App() {
  // const [isOpen, setIsOpen] = useState(false);
  const handleClickPlay = (chosenBtn) => {
    console.log(chosenBtn);
    // if (chosenBtn === "Play!") {
    //   return (
    //     <>
    //     <PlayersQuantityForm/>
    //     </>
    //   )
    // } else {
    //   return (
    //     <>
    //     <Rules/>
    //     </>
    //   )
    // }
    return (
      <>
        {chosenBtn === "Play!" && <p>play</p>}
        {chosenBtn === "Rules" && <p>rules</p>}
        {chosenBtn === "play" && <PlayersQuantityForm />}
        {chosenBtn === "rules" && <Rules/>}
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
      <PlayersNamesForm onNamesSubmit={handleNamesSubmit} />
      {/* <LoginFormTraining/> */}
    </div>
    
  )
  
}