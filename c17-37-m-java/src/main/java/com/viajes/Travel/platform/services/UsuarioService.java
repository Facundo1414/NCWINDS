package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.Usuario;
import com.viajes.Travel.platform.entity.viajes;
import com.viajes.Travel.platform.respository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements UsuarioServiceImp{
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Usuario buscarUsuarioPorId(Integer id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    @Override
    public void guardarUsuario(Usuario us) {
        usuarioRepository.save(us);
    }

    @Override
    public void eliminarUsuario(Integer id) {
        usuarioRepository.deleteById(id);
    }

    /*@Override
    public viajes reservarViaje(Integer idres) {
        usuarioRepository.save(idres);
    }*/
}
