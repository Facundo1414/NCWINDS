package com.viajes.Travel.platform.respository;

import com.viajes.Travel.platform.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

//    void buscarViaje();
//
//    void reservarViaje();
}

