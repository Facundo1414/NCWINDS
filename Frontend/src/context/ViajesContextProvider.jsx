import React, { useState } from 'react'
import { createContext } from 'react'


export const ViajesContext = createContext()


const ViajesContextProvider = ({children}) => {

    const [infoVuelo, setInfoVuelo] = useState({
        origen: "",
        destino: "",
        fechaIda: "",
        fechaVuelta: "",
    })

    const data = {
        infoVuelo,
        setInfoVuelo
    }

    return   (
        <ViajesContext.Provider value={data}>
            {children}
        </ViajesContext.Provider>
    )
}




export default ViajesContextProvider