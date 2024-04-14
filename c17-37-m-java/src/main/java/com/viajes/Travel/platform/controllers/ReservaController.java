package com.viajes.Travel.platform.controllers;

import com.viajes.Travel.platform.entity.Reserva;
import com.viajes.Travel.platform.services.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reserva")
public class ReservaController {
    
    @Autowired
    private ReservaService reservaService;
    
    @PostMapping()
    public ResponseEntity<Reserva> crearReserva(@RequestBody Reserva res) {
        reservaService.guardarReserva(res);
        return ResponseEntity.status(HttpStatus.CREATED).body(res);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> borrarReserva(@PathVariable("id") Integer id) {
        reservaService.eliminarReserva(id);
        return ResponseEntity.noContent().build();
    }
}
