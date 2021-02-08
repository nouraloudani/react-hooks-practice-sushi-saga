import React from "react";

function Sushi({ onPlateClick, sushi }) {
  // console.log(sushi.eaten)

  function handleClick() {
    // if (!eaten) {
      onPlateClick(sushi);
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {sushi.eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
