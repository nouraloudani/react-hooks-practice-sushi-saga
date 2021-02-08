import React from "react";
import Sushi from "./Sushi"
import MoreButton from "./MoreButton";

function SushiContainer({ index, setIndex, toDisplay, sushiDisplay, onPlateClick, toDisplayNonEaten }) {
let mapping;
    if (index === Math.floor(sushiDisplay.length / 4 - 1) ){
        setIndex(0)
        mapping = toDisplayNonEaten().map((s) => <Sushi key={s.id} onPlateClick={onPlateClick} sushi={s} />)
        console.log(`post ${index}`);
    }else {
        mapping = toDisplay().map((s) => <Sushi key={s.id} onPlateClick={onPlateClick} sushi={s} />)
        console.log(index);
    }
    
  return (
    <div className="belt">
      {mapping}
      <MoreButton key="button" index={index} setIndex={setIndex} />
    </div>
  );
}

export default SushiContainer;
