package com.viajes.Travel.platform.respository;

import com.viajes.Travel.platform.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import com.viajes.Travel.platform.entity.viajes;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    
    
    //List <Viajes> buscarViaje();

    viajes reservarViaje(Integer id);
    
}

