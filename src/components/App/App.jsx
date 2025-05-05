// import { useState } from 'react'
import css from "./App.module.css";
import Header from "../Header/Header"
import PlayersQuantityForm from "../PlayersQuantityForm/PlayersQuantityForm"
import PlayersNamesForm from '../PlayersNamesForm/PlayersNamesForm';
import Rules from "../Rules/Rules"
import ScoreTable from "../ScoreTable/ScoreTable";
import RoundOneForm from "../RoundOneForm/RoundOneForm";
// import LoginFormTraining from "../LoginFormTraining/LoginFormTraining"
import Winner from "../Winner/Winner";
import { useState,useEffect } from "react";

export default function App() {
  const initPlayers = [
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
      name: "Bro",
      roundOne: 0,
      roundTwo: 0,
      roundThree: 0,
      pudding: 0,
      total: 0
    },
    {
      id: "344",
      name: "Sis",
      roundOne: 0,
      roundTwo: 0,
      roundThree: 0,
      pudding: 0,
      total: 0
    },
        {
      id: "344",
      name: "Guest",
      roundOne: 0,
      roundTwo: 0,
      roundThree: 0,
      pudding: 0,
      total: 0
    },
  ]

  const [players, setPlayers] = useState(initPlayers);
  console.log("Players first: ", players)

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
  const handleGameSummary = (player1scores, player2scores, player3scores, player4scores, player5scores) => {
    console.log("Players before setPlayers", players);
    setPlayers((players) => {
      players[0].total = player1scores;
      players[1].total = player2scores;
      players[2].total = player3scores;
      players[3].total = player4scores;
      players[4].total = player5scores;
      return players;
    })
    // player1scores={ players[0].total} player2scores={ players[1].total} player3scores={ players[2].total} player4scores={ players[3].total} player5scores={ players[4].total}
    console.log("Players after setPlayers", players);

  }
  console.log(players[0]);
  return (
    <div className={css.container}>
      <Header onClick={handleClickPlay}/>
      <PlayersQuantityForm onQtySubmmit={handleQtySubmit} />
      <PlayersNamesForm onNamesSubmit={handleNamesSubmit} />
      {/* <ScoreTable players={players}/> */}
      <RoundOneForm player1={players[0]} player2={players[1]} player3={players[2]} player4={players[3]} player5={players[4]} onSubmit={handleGameSummary} />
      <Winner player1={players[0]} player2={players[1]} player3={players[2]} player4={players[3]} player5={players[4]} />
    </div>
    
  )
  
} 