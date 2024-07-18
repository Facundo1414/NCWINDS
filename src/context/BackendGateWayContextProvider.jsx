import React from 'react'
import { createContext } from 'react'

export const BackendGateWayContext = createContext()

const BackendGateWayContextProvider = ({children}) => {

    const BASE_URL = 'http://localhost:8080'
    const urlViajesController = `${BASE_URL}/api/v1/viajes`
    const urlReservaController = `${BASE_URL}/api/v1/reserva`
    const urlUsuarioController = `${BASE_URL}/api`
    const urlLoginController = `${BASE_URL}/api/auth/login`
    const urlSignUpController = `${BASE_URL}/api/auth/usuarios`

    const data = {
        urlViajesController,
        urlReservaController,
        urlUsuarioController,
        urlLoginController,
        urlSignUpController
    }

  return (
    <BackendGateWayContext.Provider value={data}>
        {children}
    </BackendGateWayContext.Provider>
  )
}


export default BackendGateWayContextProvider