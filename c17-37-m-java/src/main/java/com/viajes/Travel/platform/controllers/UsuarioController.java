package com.viajes.Travel.platform.controllers;

import com.viajes.Travel.platform.entity.Usuario;
import com.viajes.Travel.platform.entity.Viajes;
import com.viajes.Travel.platform.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioServ;

    // Endpoint para obtener un usuario por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable("id") Integer id) {
        Usuario usuario = usuarioServ.buscarUsuarioPorId(id);
        if (usuario != null) {
            return ResponseEntity.ok(usuario);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint para crear un nuevo usuario
    @PostMapping("/create")
    public ResponseEntity<Usuario> crearUsuario(@RequestBody Usuario us) {
        usuarioServ.guardarUsuario(us);
        return ResponseEntity.status(HttpStatus.CREATED).body(us);
    }

    // Endpoint para eliminar un usuario por su ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> borrarUsuario(@PathVariable("id") Integer id) {
        usuarioServ.eliminarUsuario(id);
        return ResponseEntity.noContent().build();
    }
    
    
    /*@PostMapping("/reserva")
    public ResponseEntity<viajes> reservarViaje_(@RequestBody Integer idres) {
        usuarioServ.reservarViaje(idres);
        return ResponseEntity.status(HttpStatus.CREATED).body(idres);
    }*/
}

