// import { useState } from 'react'
import css from "./App.module.css";
import Header from "../Header/Header"
import PlayersQuantityForm from "../PlayersQuantityForm/PlayersQuantityForm"
import PlayersNamesForm from '../PlayersNamesForm/PlayersNamesForm';
import Rules from "../Rules/Rules"
import ScoreTable from "../ScoreTable/ScoreTable";
import RoundOneForm from "../RoundOneForm/RoundOneForm";
// import LoginFormTraining from "../LoginFormTraining/LoginFormTraining"

export default function App() {
  const players = [
    {
      id: "341",
      name: "Mom",
      roundOne: 0,
      roundTwo: 0,
      roundThree: 0,
      pudding: 0,
      total: 0
    },
    {
      id: "342",
      name: "Dad",
      roundOne: 0,
      roundTwo: 0,
      roundThree: 0,
      pudding: 0,
      total: 0
    },
    {
      id: "343",
      name: "Nick",
      roundOne: 0,
      roundTwo: 0,
      roundThree: 0,
      pudding: 0,
      total: 0
    },
    {
      id: "344",
      name: "Alice",
      roundOne: 0,
      roundTwo: 0,
      roundThree: 0,
      pudding: 0,
      total: 0
    },
  ]
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
      {/* <ScoreTable players={players}/> */}
      <RoundOneForm/>
    </div>
    
  )
  
}