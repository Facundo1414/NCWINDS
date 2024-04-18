package com.viajes.Travel.platform.controllers;

import com.viajes.Travel.platform.Dto.JwtResponseDto;
import com.viajes.Travel.platform.Dto.LoginDto;
import com.viajes.Travel.platform.entity.Usuario;
import com.viajes.Travel.platform.entity.Viajes;
import com.viajes.Travel.platform.jwt.JwtService;
import com.viajes.Travel.platform.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioServ;
    @Autowired
    private BCryptPasswordEncoder passwordEncode;
    @Autowired
    private JwtService jwtService;


    @PostMapping("/auth/login")
    public ResponseEntity<?>login(@RequestBody LoginDto dto){

        Usuario usuario= this.usuarioServ.buscarPorCorreoActivo(dto.getCorreo());
        if (usuario==null){

            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new HashMap<>(){
                {
                    put("mensaje", "Las credenciales ingresadas no son válidas");
                }
            });
        }else{
            if (this.passwordEncode.matches(dto.getPassword(), usuario.getPassword())){
                String token=this.jwtService.generarToken(usuario.getCorreo());

                return ResponseEntity.status(HttpStatus.OK).body(
                        new JwtResponseDto(
                                usuario.getId(), usuario.getNombre(), usuario.getPerfilId().getNombre(), usuario.getPerfilId().getId(),  token
                        )
                );
            }else{
                return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new HashMap<>(){
                    {
                        put("mensaje", "Las credenciales ingresadas no son válidas");
                    }
                });
            }
        }
    }

    @GetMapping("/auth/refresh/{id}")

    public ResponseEntity<?>refresh (@PathVariable ("id") Integer id){

        Usuario usuario=this.usuarioServ.buscarPorId(id);

        if (usuario==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new HashMap<>(){
                {
                    put("mensaje","Ocurrio un error inesparado");
                }
            });
        }else {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new JwtResponseDto( usuario.getId(), usuario.getNombre(), usuario.getPerfilId().getNombre(), usuario.getPerfilId().getId(), this.jwtService.generarToken(usuario.getCorreo())));
        }

    }


}

