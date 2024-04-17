package com.viajes.Travel.platform.respository;

import com.viajes.Travel.platform.entity.EstadosModel;
import com.viajes.Travel.platform.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import com.viajes.Travel.platform.entity.Viajes;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    
    
    //List <Viajes> buscarViaje();

    //Viajes reservarViaje(Integer id);

    Usuario findByCorreo(String correo);

    Optional<Usuario> findByCorreoAndEstadosId(String correo, EstadosModel estado);
}

