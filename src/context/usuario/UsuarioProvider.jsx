import React, { createContext, useContext, useState, useEffect } from "react";

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioAlmacenado = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioAlmacenado) {
      setUsuario(usuarioAlmacenado);
    }
  }, []);
  const actualizarUsuario = (nuevoUsuario) => {
    setUsuario(nuevoUsuario);
    if (nuevoUsuario === null) {
   
      localStorage.removeItem('usuario');
    } else {
 
      localStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
    }
  };

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario, actualizarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(UsuarioContext);
