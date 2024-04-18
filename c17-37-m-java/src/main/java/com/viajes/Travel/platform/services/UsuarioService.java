package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.Usuario;
import com.viajes.Travel.platform.entity.Viajes;
import com.viajes.Travel.platform.respository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService implements UsuarioServiceImp{
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private EstadosService estadosService;

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
    public Viajes reservarViaje(Integer idRes) {
        usuarioRepository.save(idRes);
    }*/



    public List<Usuario> listar(){

        return this.usuarioRepository.findAll();
    }


    public void guardar(Usuario model){

        this.usuarioRepository.save(model);
    }

    public Usuario buscarPorId(Integer id){

        Optional<Usuario> optional =this.usuarioRepository.findById(id);

        if (optional.isPresent()){

            return  optional.get();
        }

        return null;
    }

    public void eliminar(Integer id){

        this.usuarioRepository.deleteById(id);
    }

    public Usuario buscarPorCorreo(String correo){

        return this.usuarioRepository.findByCorreo(correo);
    }

    public Usuario buscarPorCorreoActivo(String correo){

        Optional<Usuario> optional = this.usuarioRepository.findByCorreoAndEstadosId(correo,this.estadosService.buscarPorId(1L));


        if (optional.isPresent()){

            return optional.get();
        }
        return null;
    }
}
