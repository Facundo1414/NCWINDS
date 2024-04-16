import React, { useState, createContext } from 'react'


export const ViajesContext = createContext()


const ViajesContextProvider = ({children}) => {

    const [infoVuelo, setInfoVuelo] = useState({
        origen: "",
        destino: "",
        fechaIda: "",
        fechaVuelta: "",
    })

    const [vueloSeleccionado, setVueloSeleccionado] = useState({
        id: "",
        origin: "",
        destiny: "",
        price: 0,
        dateOfOrigin: "",
        dateOfDestiny: "",
        departureTime: "",
        arrivalTime: "",
        scaleNumbers: 0,
        description: "",
        duration: ""
    })

    const data = {
        infoVuelo,
        setInfoVuelo,
        vueloSeleccionado,
        setVueloSeleccionado
    }

    return   (
        <ViajesContext.Provider value={data}>
            {children}
        </ViajesContext.Provider>
    )
}


export { ViajesContextProvider };