package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.Usuario;
import com.viajes.Travel.platform.entity.viajes;

public interface UsuarioServiceImp {
    
    public Usuario buscarUsuarioPorId(Integer id);
    
    public void guardarUsuario(Usuario us);
    
    public void eliminarUsuario(Integer id);
    
    //viajes reservarViaje(Integer idres);
}
