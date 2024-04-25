import React, { useState, createContext } from 'react';


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

    const [listaAsientos, setListaAsientos] = useState([]);

    const [reserva, setReserva] = useState({
        viaje: {
            id: ""
        },
        usuario: {
            id: ""
        },
        totalNumberOfSeats: 0,
        name: "",
        lastName: "",
        residenceCountry: "",
        numberDocument: "",
        dateOfBirth: "",
        gender: "",
    });

    const data = {
        infoVuelo,
        setInfoVuelo,
        vueloSeleccionado,
        setVueloSeleccionado,
        listaAsientos,
        setListaAsientos,
        reserva,
        setReserva
    }

    return   (
        <ViajesContext.Provider value={data}>
            {children}
        </ViajesContext.Provider>
    )
}


export { ViajesContextProvider };