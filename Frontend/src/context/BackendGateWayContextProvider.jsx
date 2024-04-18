import React from 'react'
import { createContext } from 'react'

export const BackendGateWayContext = createContext()

const BackendGateWayContextProvider = ({children}) => {

    const localHost = 'http://localhost:8080'
    const urlViajesController = `${localHost}/api/v1/viajes`
    const urlReservaController = `${localHost}/api/v1/reserva`
    const urlUsuarioController = `${localHost}/api`

    const data = {
        urlViajesController,
        urlReservaController,
        urlUsuarioController
    }

  return (
    <BackendGateWayContext.Provider value={data}>
        {children}
    </BackendGateWayContext.Provider>
  )
}


export default BackendGateWayContextProvider