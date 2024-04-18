import React, { createContext, useContext, useState, useEffect } from 'react';


const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioAlmacenado = JSON.parse(sessionStorage.getItem('usuario'));
    if (usuarioAlmacenado) {
      setUsuario(usuarioAlmacenado);
    }
  }, []);
  const actualizarUsuario = (nuevoUsuario) => {
    setUsuario(nuevoUsuario);
  };

  return (
    <UsuarioContext.Provider value={{ usuario,setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(UsuarioContext);