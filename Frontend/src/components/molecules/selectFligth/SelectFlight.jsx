import React, { useState } from "react";
import "./SelectFlight.css";


const SelectFlight =({setSelectPlane})=>{
  const [inBoundSelected, setInBoundSelected] = useState(false);
  const [outBoundSelected, setOutBoundSelected] = useState(true);

  const handledOutBoundedSelected = () => {
    setOutBoundSelected(true);
    setInBoundSelected(false);
    setSelectPlane(true);
  };

  const handledInBoundedSelected = () => {
    setOutBoundSelected(false);
    setInBoundSelected(true);
    setSelectPlane(false);
  };


  return (
    <>
      <div className="container-select-flight-option">
        <div className="container-outbound" onClick={handledOutBoundedSelected}>
          {/* por modificar */}
          Buenos Aires a Sao paulo
          vuelo de ida
        </div>
        <div className="container-inbound" onClick={handledInBoundedSelected}>
           {/* por modificar */}
          Sao paulo a Madrid
        </div>
      </div>
      <div className={outBoundSelected ? "slider-selection" : "slider-unselected"}>
  
      </div>
    </>
  );
}

export { SelectFlight };