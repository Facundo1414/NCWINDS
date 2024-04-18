package com.viajes.Travel.platform.jwt;

import com.viajes.Travel.platform.entity.Usuario;
import com.viajes.Travel.platform.respository.UsuarioRepository;
import com.viajes.Travel.platform.services.EstadosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserInfoService  implements UserDetailsService {
    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private EstadosService estadosService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {


        Optional<Usuario> userDetail=this.repository.findByCorreoAndEstadosId(username,this.estadosService.buscarPorId(1L));

        return userDetail.map(UserInfoDetails:: new).orElseThrow(()-> new UsernameNotFoundException("User not found" + username));
    }
}