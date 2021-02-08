import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import SushiWallet from "./SushiWallet";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
function App() {
  const [sushiDisplay, setSushiDisplay] = useState([]);
  const [index, setIndex] = useState(0);
  const [budget, setBudget] = useState(60);
  const [EnteredValue, setEnteredValue] = useState(0);

useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then((sushiArray) => {
    const updatedSushis = sushiArray.map((sushi) => {
    return {...sushi, eaten: false };
  });
  setSushiDisplay(updatedSushis);
});
}, [])

function onPlateClick(sushi){
  //main logic
  if (sushi.eaten === false && budget >= sushi.price){
  const newSushis = sushiDisplay.map((s) => {
    if (s.id === sushi.id && budget - s.price >= 0){
      return { ...s, eaten: true };
    }else{
    return s;
    }
  })
  setSushiDisplay(newSushis);
  setBudget(budget-sushi.price);
  }
  //for alerts
  if (budget < sushi.price){
    alert('Insufficient Funds')
  }else if (sushi.eaten === true){
    alert('This Plate Is Empty')
  }
}

function toDisplay(){
  return sushiDisplay.slice(index*4, index*4+4)
}

function handleAddCredit(e){
  e.preventDefault();
  setBudget(budget + EnteredValue);
  setEnteredValue("");
}
function changeHandler(e){
  let valu = e.target.value;
  if (valu > 0){
  setEnteredValue(parseInt(e.target.value));
  }
}
function toDisplayNonEaten(){
  return nonEatenSushis.slice(index*4, index*4+4)
}
const eatenSushis = sushiDisplay.filter((sushi) => sushi.eaten === true);
const nonEatenSushis = sushiDisplay.filter((sushi) => sushi.eaten === false);

  return (
    <div className="app">
      <SushiContainer key="sushiContainer" toDisplayNonEaten={toDisplayNonEaten} toDisplay={toDisplay} onPlateClick={onPlateClick} index={index} setIndex={setIndex} sushiDisplay={sushiDisplay} />
      <SushiWallet key="wallt" onAddCredit={handleAddCredit} formValue={EnteredValue} onChangeHandle={changeHandler} />
      <Table key="tabl" plates={eatenSushis} budget={budget} />
    </div>
  );
}

export default App;
