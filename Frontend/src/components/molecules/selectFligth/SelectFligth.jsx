import React, { useState } from 'react'
import './SelectFligth.css'
export default function SelectFligth() {

    const [boundSelected, setBoundSelected] = useState(false);
  return (
    <>
    <div className='container-select-flight-option'>
        <div className='container-outbound'>
            Select flight ida
        </div>
        <div className='container-inbound'>Select flight vuelta</div>
        
    </div>
    <div className='slider-selection'></div>
    </>
  )
}
