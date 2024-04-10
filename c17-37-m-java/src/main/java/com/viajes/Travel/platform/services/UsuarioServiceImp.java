package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.Usuario;

public interface UsuarioServiceImp {
    
    public Usuario buscarUsuarioPorId(Integer id);
    
    public Usuario guardarUsuario(Usuario usuario);
    
    public void eliminarUsuario(Integer id);
    
}
